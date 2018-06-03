const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const morgan = require('morgan');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/open-courts";
const db = require("./models");
const courts = require('./stores/courts');
const reader = require('davefeedread');
const utils = require('daveutils');

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

const feed_url = 'http://www.nysd.uscourts.gov/rss/ecfDocketReport.xml';
const timeOutSecs = 30;
const whenstart = new Date();

const MAX_FILING_COUNT = 30;
var filing_count = 0;

var email_count = 0;

const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: 'mg.docketdigest.com' });

db.Court.find().then((db_courts) => {
  for (let i = 0; i < db_courts.length; i++) {
    let current_court = db_courts[i];
    let docket_list = current_court.docket_identifiers;

    if (docket_list.length < 1) continue;

    let court_map = courts.find((category) => {
      return (category.identifier == current_court.category);
    }).courts.find((court) => {
      return (court.identifier == current_court.identifier);
    });

    reader.parseUrl(court_map.feed_url, timeOutSecs, function (err, feed) {
      if (err) return console.log(err.message);

      for (let j = 0; j < feed.items.length; j++) {
        let item = feed.items[j];
        let docket_identifier = item.title.split(' ').shift();
        // console.log(docket_identifier);
        if (!docket_list.includes(docket_identifier)) continue;

        findOrCreateFiling(item);
        // console.log(item.title);
      }

      console.log("It took " + utils.secondsSince(whenstart) + " seconds to read and parse the feed.");
    });
  }
}).catch(err => console.log(err));

function findOrCreateFiling(item) {
  let docket_identifier = item.title.split(' ').shift();

  db.Docket.findOne({ docket_number: docket_identifier }).then((docket) => {
    if (!docket) {
      // create docket and then add Filing
      db.Docket.create({
        docket_number: item.title.split(' ').shift(),
        docket_url: item.link,
        title: item.title
      }).then(newDocket => addFiling(newDocket, item))
        .catch(err => console.log(err));
    }
    else {
      // insert filing
      addFiling(docket, item);
    }
  })
    .catch(err => console.log(err));

  function addFiling(docket, item) {
    db.Filing.findOne({ docket_url: item.guid })
      .then((filing) => {
        if (!filing) {

          if (filing_count < MAX_FILING_COUNT) {
            filing_count++;

            doc_url = (/\(.*\"(.*)\".*\)/).exec(item.summary);
            db.Filing.create({
              description: (/\[(.*)\]/).exec(item.summary)[1],
              published_at: item.pubDate,
              docket_url: item.guid,
              document_url: doc_url ? doc_url[1] : null,
            })
              .then(filing => {
                // console.log(filing);
                console.log('sending emails...');

                // send email after filing is added
                sendEmails(docket, filing);

                db.Docket.update(
                  { _id: docket._id },
                  { $push: { filings: filing._id } })
                  .then(docket => console.log(docket))
                  .catch(err => console.log(err));
              })
              .catch(err => console.log(err));
          }
          else {
            console.log('max filing limit hit');
          }
        }
      })
      .catch(err => console.log(err));
  }

  function sendEmails(docket, filing) {
    console.log(docket.docket_number);

    db.User.find({ subscriptions: docket.docket_number })
      .then((users) => {
        if (users) {
          for (let i = 0; i < users.length; i++) {
            let user = users[i];

            console.log('sending email to', user.username);

            sendEmail(docket, filing, user);
          }
        }
        else {
          console.log('no users found')
        }
      })
      .catch(error => console.log(error));
  }

  function sendEmail(docket, filing, user) {
    let data = {
      from: 'Docket Digest <hello@docketdigest.com>',
      to: `${user.name} <${user.username}>`,
      subject: 'Docket Update (' + docket.docket_number + '): ' + filing.description,
      text: 'There has been an update to your docket! View it at ' + filing.docket_url,
      html: `
        <div style="text-align: center; font-family: sans-serif; margin-top: 5em;">
          <h2>There has been an update to a docket you are following!<br />(${docket.title})</h2>
          <h3>${filing.description}</h3>
          <div>
            <a style="text-decoration: none; display: inline-block; padding: 0.5em; margin: 0.5em; border: 3px solid #3e82f7; border-radius: 3px; color: #fff; background-color: #3e82f7; font-weight: bold;" href="${filing.docket_url}">View Docket</a>
            <a style="text-decoration: none; display: inline-block; padding: 0.5em; margin: 0.5em; border: 3px solid #666; border-radius: 3px; color: #fff; background-color: #666; font-weight: bold;" href="${filing.document_url}">View Document</a>
          </div>
        </div>
      `,
    };

    console.log('data', data);

    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
  }
}

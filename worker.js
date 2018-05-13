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
    //description
    // console.log((/\[(.*)\]/).exec(item.summary)[1]);
    // console.log((/\(.*\"(.*)\".*\)/).exec(item.summary)[1]);
    db.Filing.findOne({ docket_url: item.guid })
      .then(filing => {
        if (!filing) {
          doc_url = (/\(.*\"(.*)\".*\)/).exec(item.summary);
          db.Filing.create({
            description: (/\[(.*)\]/).exec(item.summary)[1],
            published_at: item.pubDate,
            docket_url: item.guid,
            document_url: doc_url ? doc_url[1] : null,
          })
            .then(filing => {
              console.log(filing);
              db.Docket.update(
                { _id: docket._id },
                { $push: { filings: filing._id } })
                .then(docket => console.log(docket))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  }
}

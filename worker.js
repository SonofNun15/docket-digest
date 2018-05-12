const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const morgan = require('morgan');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/open-courts";
const db = require("./models");

const reader = require('davefeedread');
const utils = require('daveutils');


const feed_url = 'http://www.nysd.uscourts.gov/rss/ecfDocketReport.xml';
const timeOutSecs = 30;
const whenstart = new Date ();

db.DocketList.find().then((list) => {
  let identifiers = list.map(item => item.docket_identifier);

  reader.parseUrl (feed_url, timeOutSecs, function (err, feed) {
    if (err) return console.log(err.message);

    for (let i = 0; i < feed.items.length; i++) {
      let item = feed.items[i];
      let docket_identifier = item.title.split(' ').shift();

      if (!list.includes(docket_identifier)) continue;

      findOrCreateFiling(item);
    }

    console.log ("It took " + utils.secondsSince (whenstart) + " seconds to read and parse the feed.");
  });
});

function findOrCreateFiling(filing) {
  let docket_identifier = item.title.split(' ').shift();

  db.Docket.findOne({ docket_number: docket_identifier }).then((docket) => {
    if (!docket) {
      // create docket
    }

    // insert filing
  });
}

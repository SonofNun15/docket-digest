const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const morgan = require('morgan');
const LocalStrategy = require('passport-local').Strategy;
const http = require('http');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const axios = require('axios');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/open-courts";

const feedRead = require('davefeedread');
const utils = require('daveutils');

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

const User = require('./models/User');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(cookieparser());
app.use(session({
  // this should be changed to something cryptographically secure for production
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  name: 'sid', // don't use the default session cookie name
  // set your options for the session cookie
  cookie: {
    httpOnly: true,
    // the duration in milliseconds that the cookie is valid
    maxAge: 120 * 60 * 1000, // 120 minutes
    // recommended you use this setting in production if you have a well-known domain you want to restrict the cookies to.
    // domain: 'your.domain.com',
    // recommended you use this setting in production if your site is published using HTTPS
    // secure: true,
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./build"));
app.use(routes);

const server = app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);

  const urlTestFeed = 'http://www.nysd.uscourts.gov/rss/ecfDocketReport.xml';
  const timeOutSecs = 30;
  const whenstart = new Date ();

  feedRead.parseUrl (urlTestFeed, timeOutSecs, function (err, theFeed) {
    if (err) {
      console.log (err.message);
    }
    else {
      for (var i = 0; i < theFeed.items.length; i++) {
        console.log ("Item #" + i + ": " + theFeed.items [i].title + ".\n  " + theFeed.items[i].description);
      }

      console.log ("It took " + utils.secondsSince (whenstart) + " seconds to read and parse the feed.");
    }
  });
});

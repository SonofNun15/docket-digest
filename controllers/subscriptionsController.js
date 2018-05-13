const db = require('../models');
const courts = require('../stores/courts');

module.exports = {
  subscribe: function (req, res) {
    let sub = req.body;
    if (req.user) {
      db.User.update({ _id: req.user._id }, { $push: { subscriptions: sub.docket_identifier } })
        .then(console.log('worked'))
        .catch(err => console.log(err));
    }
    db.Court.findOne({ identifier: sub.court_identifier, category: sub.category_identifier }).then((court) => {

      if (!court) {
        let court_exists = courts
          .find((category) => {
            return (category.identifier == sub.category_identifier);
          })
          .courts
          .map(court => court.identifier)
          .includes(sub.court_identifier)

        if (!court_exists) return console.log('court does not exist');

        db.Court.create({
          identifier: sub.court_identifier,
          category: sub.category_identifier,
          docket_identifiers: [sub.docket_identifier],
        }).then(court => console.log('create court', court)).catch(err => console.log('create err', err));
      }
      else {
        db.Court.update({ $and: [{ identifier: sub.court_identifier }, { category: sub.category_identifier }] }, { $push: { docket_identifiers: sub.docket_identifier } }).then(court => console.log('update court', court)).catch(err => console.log('update err', err));;
      }

      res.json({ hello: 'world' });
    }).catch(err => console.log('find err', err));
  },
};

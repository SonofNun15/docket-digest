const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Docket.insert(req.body)
            .then(
                res.json("Docket created")
            );
    },
    getUpdatedAt: function (req, res) {
        db.Docket.find({ docket_number: req.params.docket_number })
            .then(res.json(docketDB.updated_at))
            .catch(err =>
                res.status(422).json(err)
            );
    },
    addFiling: function (req, res) {
        db.Docket.update({ docket_number: req.body.docket_number }, { $push:{ filings: req.body.filingId} , updated_at: Date.now })
            .then(res.json("Updated Date"))
            .catch(err => res.status(422).json(err));
    }
};

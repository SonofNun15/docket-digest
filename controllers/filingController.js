const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Filing.insert(req.body)
            .then(filing => {
                res.json("Filing created");
                db.Docket.update(
                    { docket_number: req.body.docket_number },
                    { $push: { filings: req.body.filingId }, updated_at: Date.now })
            })
            .catch(err => res.status(422).json(err));
    }
};
const db = require("../models");
const passport = require('passport');
const md5 = require('md5');

module.exports = {
    create: function (req, res) {
        db.User.register(new db.User({ username: req.body.username }), req.body.password, function (err, user) {
            if (err) {
                return res.status(422).json('error registering user');
            }

            passport.authenticate('local')(req, res, function () {
                const { username, _id } = req.user;
                res.json({ username: username, id: _id, gravatarId: md5(username.toLowerCase().trim()) });
            });
        });
    },
    logout: function (req, res) {
        req.logout();
        req.session.destroy();
        res.json({
            message: 'You have been logged out.'
        });
    },
    login: function (req, res) {
        passport.authenticate('local')(req, res, function () {
            const { username, _id } = req.user;
            res.json({ username: username, id: _id, gravatarId: md5(username.toLowerCase().trim()) });
        });
    },
    currentuser: function (req, res) {
        if (!req.user) {
            return res.status(401).json({
                message: 'You are not currently logged in.'
            });
        }
        res.json({ username: req.user.username, id: req.user._id, gravatarId: md5(req.user.username.toLowerCase().trim()) });
    }
};

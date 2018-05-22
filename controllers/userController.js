const db = require("../models");
const passport = require('passport');
const md5 = require('md5');

module.exports = {
    create: function (req, res) {
        db.User.register(new db.User({ username: req.body.username, name: req.body.name }), req.body.password, function (err, user) {
            if (err) {
                return res.status(422).json('error registering user');
            }
            passport.authenticate('local')(req, res, function () {
                const { username, _id } = req.user;
                res.json({ username: username, id: _id, gravatarId: md5(username) });
            });
        });
    },

    delete: function (req, res) {
        if (req.user) {
            db.User.findOneAndRemove({ _id: req.user._id })
                .then(dbUser => {
                    req.logout();
                    req.session.destroy();
                    res.json("Account deleted");
                })
                .catch(err => res.status(422).json("Error deleting account"));
        }
        else {
            res.status(401).json("Must be logged in to delete account");
        }
    },

    changePassword: function (req, res) {
        
    },

    modifyUser: function (req, res) {
        if (req.user) {
            const { username, name } = req.body;
            const userUpdate ={};
            if(username)userUpdate.username = username;
            if(name)userUpdate.name = name;
            db.User.findOneAndUpdate({ _id: req.user._id }, userUpdate, { new: true })
                .then(dbUser => {
                    passport.authenticate('local')(req, res, function () {
                        const { username, _id } = req.user;
                        res.json({ username: username, id: _id, gravatarId: md5(username) });
                    });
                })
                .catch(err => res.status(422).json("Error updating user"));
        }
        else {
            res.status(401).json("You are not currently logged in.");
        }
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
            res.json({ username: username, id: _id, gravatarId: md5(username) });
        });
    },

    currentUser: function (req, res) {
        if (!req.user) {
            return res.status(401).json({
                message: 'You are not currently logged in.'
            });
        }
        res.json({ username: req.user.username, id: req.user._id, gravatarId: md5(req.user.username) });
    }
};

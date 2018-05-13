const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create)
    .get(userController.currentuser);

router.route("/login")
    .post(userController.login)
    .delete(userController.logout);

module.exports = router;
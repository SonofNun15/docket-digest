const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .post(userController.create)
    .delete(userController.delete)
    .put(userController.modifyUser)
    .get(userController.currentUser);

router.route("/login")
    .post(userController.login)
    .delete(userController.logout);

module.exports = router;
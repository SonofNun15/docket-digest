const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionsController");

router
  .route('/')
  .post(subscriptionsController.subscribe);

module.exports = router;

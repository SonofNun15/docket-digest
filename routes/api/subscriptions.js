const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionsController");

router
  .route('/')
  .get(subscriptionsController.list)
  .post(subscriptionsController.subscribe);

module.exports = router;

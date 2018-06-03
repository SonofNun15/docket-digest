const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionsController");

router
  .route('/')
  .get(subscriptionsController.getSubscriptions)
  .post(subscriptionsController.subscribe);

router
  .route('/:docket_identifier')
  .delete(subscriptionsController.unsubscribe);
module.exports = router;

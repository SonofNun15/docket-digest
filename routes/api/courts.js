const router = require("express").Router();
const courtsController = require("../../controllers/courtsController");

router
  .route('/')
  .get(courtsController.index);

module.exports = router;

const router = require("express").Router();
const userRoutes = require("./user");
const courtsRoutes = require('./courts');
const subscriptionsRoutes = require('./subscriptions');

router.use("/users", userRoutes);
router.use('/courts', courtsRoutes);
router.use('/subscriptions', subscriptionsRoutes);

module.exports = router;

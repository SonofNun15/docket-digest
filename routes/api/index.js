const router = require("express").Router();
const userRoutes = require("./user");
const courtsRoutes = require('./courts');

router.use("/users", userRoutes);
router.use('/courts', courtsRoutes);

module.exports = router;

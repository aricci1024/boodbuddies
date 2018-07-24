const router = require("express").Router();
const bookRoutes = require("./results");

// result routes
router.use("/results", resultRoutes);

module.exports = router;

const router = require("express").Router();
const resultController = require("../../controllers/resultController");

// Matches with "/api/books"
router.route("/chart")
  .get(resultController.findAll)
  .post(resultController.create)
  .put(resultController.update);

module.exports = router;

const express = require("express");
const { handleShowTravelGuide } = require("../controllers/travelGuide");
const router = express.Router();

router.get("/:destination", handleShowTravelGuide);

module.exports = router;

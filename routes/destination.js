const express = require("express");
const mongoose = require("mongoose");
const {
  handleShowDestinations,
  handleExploreDestination,
  handleAddExploreComments,
} = require("../controllers/destination");

const router = express.Router();

router.get("/", handleShowDestinations);
router.get("/explore/:destination", handleExploreDestination);
router.post("/explore/comments/:destination", handleAddExploreComments);

module.exports = router;

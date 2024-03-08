const express = require("express");
const mongoose = require("mongoose");
const { handleTravelBlogs } = require("../controllers/travelBlog");

const router = express.Router();

router.get("/:id", handleTravelBlogs);

module.exports = router;

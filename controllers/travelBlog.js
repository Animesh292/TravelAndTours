const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const TravelBlog = require("../models/travelBlog");
const defaultTravelBlogs = require("../models/defaultTravelBlogs");

async function handleTravelBlogs(req, res) {
  // const blogId = req.params.id;
  const Blog = await TravelBlog.findById(req.params.id);
  return res.render(path.resolve("public/TravelBlogs.ejs"), {
    Blog,
    user: req.user,
  });
}

module.exports = {
  handleTravelBlogs,
};

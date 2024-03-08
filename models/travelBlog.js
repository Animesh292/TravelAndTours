const mongoose = require("mongoose");

const travelBlogSchema = new mongoose.Schema(
  {
    travelBlogImage: {
      type: String,
    },
    travelBlogTitle: {
      type: String,
      required: true,
    },
    blogContent: {
      type: String,
      required: true,
    },
    contentCreator: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TravelBlog = mongoose.model("travelBlog", travelBlogSchema);

module.exports = TravelBlog;

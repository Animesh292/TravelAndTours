const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    travelBlogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "travelblog",
    },
    exploreDestinationPlace: {
      type: mongoose.Schema.Types.String,
      ref: "exploredestination",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;

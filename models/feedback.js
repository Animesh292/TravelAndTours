const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;

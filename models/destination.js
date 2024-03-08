const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  coverImage: {
    type: String,
    // required: true,
  },
  place: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
});

const Destination = mongoose.model("destination", destinationSchema);
module.exports = Destination;

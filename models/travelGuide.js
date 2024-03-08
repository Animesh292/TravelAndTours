const mongoose = require("mongoose");

const travelGuideSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    place: {
      type: [String],
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    itinerary: [
      {
        dayNum: String,
        fromTo: String,
        tripDetails: String,
      },
    ],
    inclusions: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TravelGuide = mongoose.model("travelGuide", travelGuideSchema);
module.exports = TravelGuide;

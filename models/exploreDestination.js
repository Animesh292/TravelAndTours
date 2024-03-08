const mongoose = require("mongoose");

const exploreDestinationSchema = new mongoose.Schema(
  {
    place: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    exploreLink: {
      type: String,
      required: true,
    },
    activities: [
      {
        activity: String,
        image: String,
      },
    ],
    cuisines: [
      {
        cuisine: String,
        image: String,
      },
    ],
    accommodations: [
      {
        accommodationType: String,
        image: String,
        info: String,
      },
    ],
    transportation: [String],
    History_Mythology_and_Cultural_Significance: {
      description: String,
    },
    languages: String,
    culture: {
      culture: String,
      image: String,
    },
    travelTips: String,
    events: [
      {
        event: String,
        desc: String,
        image: String,
      },
    ],
    reviews: [
      {
        user: String,
        rating: Number,
        comment: String,
      },
    ],
  },
  { timestamps: true }
);

const ExploreDestination = mongoose.model(
  "exploredestination",
  exploreDestinationSchema
);

module.exports = ExploreDestination;

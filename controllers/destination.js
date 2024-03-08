const mongoose = require("mongoose");
const Destination = require("../models/destination");
const path = require("path");
const ExploreDestination = require("../models/exploreDestination");
const user = require("../models/comment");
const Comment = require("../models/comment");
const exploreDefaultDestinations = require("../models/exploreDefaultDestinations");

//Creating Default Destinations in models
const defaultDestinations = [
  {
    coverImage: "/images/RamMandir.jpg",
    place: ["अयोध्या", "Ayodhya"],
    description:
      "The Ayodhya Pilgrimage Center holds immense cultural and religious significance in Hinduism as it is believed to be the birthplace of Lord Rama, a central figure in the Hindu epic Ramayana. Situated in the state of Uttar Pradesh, India, Ayodhya is revered by millions of Hindus worldwide and attracts pilgrims year-round.",
  },
  {
    coverImage: "/images/Varanasi.jpg",
    place: ["वाराणसी", "Varanasi"],
    description:
      "Varanasi, also known as Kashi or Benares, is one of the oldest continuously inhabited cities in the world and holds immense cultural, spiritual, and historical significance in India. Located on the banks of the sacred River Ganges in the state of Uttar Pradesh, Varanasi is considered the spiritual capital of India.",
  },
  {
    coverImage: "/images/charDham.jpg",
    place: ["चार धाम यात्रा", "Char Dham Yatra"],
    description:
      "The Char Dham Yatra is a sacred Hindu pilgrimage to four revered sites in the Uttarakhand Himalayas: Badrinath, Kedarnath, Gangotri, and Yamunotri. Pilgrims seek blessings and spiritual purification on this journey, believed to lead to moksha (liberation). Each site holds deep mythological significance amidst stunning natural landscapes, drawing millions of devotees seeking spiritual solace.",
  },
  {
    coverImage: "/images/Vrindavan.jpg",
    place: ["वृंदावन", "Vrindavan"],
    description:
      "Step into the sacred realms of Vrindavan and Braj, where the echoes of Lord Krishna's divine melodies resonate through time. Embark on a spiritual sojourn amidst ancient temples, vibrant festivals, and the mystical charm of Braj's pastoral landscapes. Experience the essence of devotion and immerse yourself in the timeless tales of love and faith that envelop these sacred lands. Discover a journey of transcendence, where every moment is an invitation to connect with the divine.",
  },
  {
    coverImage: "/images/Haridwar.jpg",
    place: ["हरिद्वार", "Haridwar"],
    description:
      "Welcome to Haridwar, the gateway to the gods. Nestled along the banks of the holy Ganges River, Haridwar is a place where spirituality flows as freely as the sacred waters. Explore ancient temples, witness enchanting Ganga Aarti ceremonies, and partake in the age-old tradition of seeking blessings by the river. Immerse yourself in the divine aura of Haridwar, where every step is a journey towards inner peace and spiritual enlightenment.",
  },

  {
    coverImage: "/images/Rishikesh.jpg",
    place: ["ऋषिकेश", "Rishikesh"],
    description:
      "Rishikesh, situated along the Ganges River in the Himalayan foothills, is renowned for yoga, meditation, and spirituality. It's a popular destination for seekers worldwide, offering serene surroundings amidst ashrams, temples, and ghats. Additionally, adventure activities like white-water rafting attract thrill-seekers, making Rishikesh a unique blend of tranquility and adventure.",
  },
  {
    coverImage: "/images/Auli.jpg",
    place: ["औली", "Auli"],
    description:
      "Auli, nestled in Uttarakhand's Garhwal Himalayas, is renowned for skiing, trekking, and stunning views. Its pristine slopes attract enthusiasts globally, while the Auli Artificial Lake offers both adventure and serenity against a backdrop of majestic peaks. Surrounded by dense forests, Auli is a must-visit destination for nature lovers and thrill-seekers alike, offering a perfect blend of adventure and tranquility in the lap of the Himalayas.",
  },
  {
    coverImage: "/images/Manali.jpg",
    place: ["मनाली", "Manali"],
    description:
      "Nestled in Himachal Pradesh's mountains, Manali offers scenic beauty, adventure sports, and cultural charm. Visitors can explore ancient temples, enjoy hot springs in Vashisht, and shop in vibrant markets. It serves as a gateway to nearby attractions like Solang Valley and Kasol, attracting tourists year-round for trekking, skiing, and river rafting. With cozy accommodations and delicious Himachali cuisine, Manali promises a memorable retreat amidst the Himalayas.",
  },
  {
    coverImage: "/images/Shimla.jpg",
    place: ["शिमला", "Shimla"],
    description:
      "Welcome to Shimla, nestled in the majestic Himalayas, Queen of the Hills. Experience its enchanting beauty and colonial charm, explore scenic trails, and savor panoramic vistas of snow-capped peaks. Stroll through Mall Road's bustling shops, or delve into history at landmarks like the Viceregal Lodge. Whether seeking leisurely walks through pine forests or adventurous treks to Jakhu Temple, Shimla promises an idyllic retreat for nature lovers and adventurers alike.",
  },
  {
    coverImage: "/images/Nainital.jpg",
    place: ["नैनीताल", "Nainital"],
    description:
      "Welcome to Nainital, a picturesque jewel cradled amidst the Kumaon Hills. Experience its serene lakes, lush forests, and panoramic mountain views. Explore the vibrant Mall Road, lined with charming shops and eateries, or take a tranquil boat ride on Naini Lake. Delve into the rich history at landmarks like Naina Devi Temple and the Governor's House. Whether it's leisurely walks along the scenic trails or thrilling adventures like paragliding, Nainital offers a perfect blend of natural beauty and exciting experiences for every traveler.",
  },
  {
    coverImage: "/images/Mussorie.jpg",
    place: ["मसूरी", "Mussorie"],
    description:
      "Welcome to Mussoorie, the Queen of Hill Stations, cradled in the Garhwal Himalayas. Experience its serene beauty with lush hills, cascading waterfalls, and panoramic vistas. Wander along Mall Road, brimming with charming shops and eateries, or trek to Gun Hill for stunning Himalayan views. Explore historic sites like Christ Church and the Mussoorie Library. Whether it's savoring local delicacies, immersing in nature, or seeking thrills like zip-lining, Mussoorie promises an enchanting mountain getaway for all.",
  },
  {
    coverImage: "/images/Chopta.jpg",
    place: ["चोपता", "Chopta"],
    description:
      "Welcome to Chopta, the serene paradise nestled in the Himalayas, offering breathtaking vistas and tranquility. Explore lush green meadows, dense forests, and picturesque trails leading to majestic peaks. Don't miss the trekking trails to Tungnath and Chandrashila, offering panoramic views of the Himalayan range. Experience the mystical ambiance of Deoria Tal, a tranquil lake reflecting the beauty of surrounding peaks. Whether camping under the stars or indulging in trekking adventures, Chopta promises a rejuvenating escape amidst nature's embrace.",
  },
  {
    coverImage: "/images/Udaipur.jpg",
    place: ["उदयपुर", "Udaipur"],
    description:
      "Udaipur, the 'City of Lakes' in Rajasthan, India, is renowned for its majestic palaces, including the iconic City Palace overlooking Lake Pichola. Its scenic beauty, with shimmering lakes and lush landscapes, offers a romantic backdrop for travelers. Rich in culture and history, Udaipur is a treasure trove of traditional art, music, and architecture, attracting visitors from around the world.",
  },
  {
    coverImage: "/images/Delhi.jpg",
    place: ["दिल्ली", "Delhi"],
    description:
      "Delhi, India's capital, is a dynamic blend of ancient history and modernity. From iconic landmarks like the Red Fort and Jama Masjid to serene sanctuaries like the Lotus Temple, the city offers a rich tapestry of sights. Its bustling markets, such as Chandni Chowk, offer a vibrant sensory experience with street food and crafts. Explore the green oasis of Lodi Gardens or stroll through New Delhi's avenues for a taste of its cosmopolitan atmosphere. With its diverse culture and warm hospitality, Delhi promises an unforgettable journey for travelers seeking to immerse themselves in India's vibrant tapestry.",
  },
  {
    coverImage: "/images/Amritsar1.jpg",
    place: ["अमृतसर", "Amritsar"],
    description:
      "Amritsar, Punjab, is famed for the Golden Temple, symbolizing Sikh spirituality. Experience the daily rituals and community kitchen. Visit the poignant Jallianwala Bagh memorial and witness the vibrant Wagah Border ceremony. Indulge in Punjabi cuisine, shop for traditional attire, and immerse yourself in the city's rich culture, making Amritsar a must-visit destination",
  },
];

async function handleShowDestinations(req, res) {
  try {
    await Destination.deleteMany({});
    const destinations = await Destination.insertMany(defaultDestinations);
    return res.render(path.resolve("public/Destinations.ejs"), {
      destinations,
      user: req.user,
    });
  } catch (error) {
    console.log("Error seeding destinations:", error);
  }
}

async function handleExploreDestination(req, res) {
  try {
    // Retrieve the destination from the database based on the parameter in the URL
    // await ExploreDestination.deleteMany({});
    // const destinations = await Destination.insertMany(
    //   exploreDefaultDestinations
    // );
    const destination = await ExploreDestination.findOne({
      place: req.params.destination,
    });

    if (!destination) {
      return res.status(404).send("Destination not found");
    }
    const comments = await Comment.find({
      exploreDestinationPlace: req.params.destination,
    }).populate("createdBy");

    // Render the explore destination page with the retrieved destination data
    res.render(path.resolve("./public/ExploreDestination.ejs"), {
      destination,
      user: req.user,
      comments,
    });
  } catch (error) {
    console.error("Error exploring destination:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleAddExploreComments(req, res) {
  await Comment.create({
    content: req.body.content,
    exploreDestinationPlace: req.params.destination,
    createdBy: req.user._id,
  });
  return res.redirect(`/Destinations/explore/${req.params.destination}`);
}

module.exports = {
  handleShowDestinations,
  handleExploreDestination,
  handleAddExploreComments,
};

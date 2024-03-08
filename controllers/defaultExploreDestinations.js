// const express = require("express");
// const mongoose = require("mongoose");
// const ExploreDestination = require("../models/exploreDestination");

// //Function to get the coordinates of a location using Googlemaps Geocoding API
// // async function getCoordinates(location) {
// //   const apiKey = "AIzaSyBs5RY08EFRVI0J4zvoFnjeKKGda-ystp4";
// //   try {
// //     const response = await fetch(
// //       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
// //         location
// //       )}&key=${apiKey}`
// //     );
// //     const data = await response.json();
// //     if (data.results.length > 0) {
// //       const location = data.results[0].geometry.location;
// //       return { latitude: location.lat, longitude: location.lng };
// //     } else {
// //       throw new Error("Location not found");
// //     }
// //   } catch (error) {
// //     console.error("Error fetching location:", error);
// //     return null;
// //   }
// // }

// const defaultExploreDestinations = [
//   {
//     place: "Canada",
//     description:
//       "Nestled in the heart of Central Africa, Cameroon is a land of breathtaking landscapes, rich cultural diversity, and vibrant wildlife. From the lush rainforests of the south to the arid plains of the north, Cameroon offers a diverse array of experiences for travelers seeking adventure, cultural immersion, and natural beauty",
//     // location: await getCoordinates("Canada"),
//     coverImage: "/images/Cameroon.jpg",
//     attractions: [
//       {
//         name: "Niagara Falls, Ontario",
//         description:
//           "Niagara Falls, located in Ontario, Canada, is a mesmerizing natural wonder consisting of three stunning waterfalls: the Horseshoe Falls, American Falls, and Bridal Veil Falls. The falls attract millions of visitors each year, offering breathtaking views from observation decks and boat tours. Surrounded by vibrant attractions, including casinos and restaurants, Niagara Falls provides entertainment for visitors of all ages. Boat tours like the Maid of the Mist offer an up-close and exhilarating experience, taking visitors right to the base of the cascades. Whether admiring its beauty from afar or feeling the mist on your face up close, Niagara Falls promises an unforgettable experience.",
//         imageUrl: "/images/attractions/NiagaraFalls",
//       },
//       {
//         name: "Butchart Gardens - Victoria, British Columbia",
//         description:
//           "Butchart Gardens in Victoria, British Columbia, is a world-renowned botanical paradise spread across 22 hectares. Established from a former limestone quarry by Jennie Butchart in the early 20th century, it features meticulously curated floral displays and landscaped gardens. Visitors are enchanted by its diverse array of plant species, including vibrant flowers, ornamental trees, and tranquil water features. From the serene Japanese Garden to the colorful Rose Garden, each section offers a unique sensory experience. Throughout the year, Butchart Gardens hosts events, concerts, and seasonal festivals, attracting visitors from around the globe. Its rich history, continuous innovation, and meticulous maintenance have solidified its status as a premier tourist attraction in British Columbia. Whether exploring its beauty in spring bloom or amidst winter lights, Butchart Gardens promises an unforgettable botanical journey for all who visit.",
//         imageUrl: "/images/attractions/BuchartGarden",
//       },
//       {
//         name: "Old Quebec (Vieux-Québec) - Quebec City, Quebec",
//         description:
//           "Old Quebec (Vieux-Québec) in Quebec City, Quebec, is a charming and historic district that exudes European elegance and charm. Recognized as a UNESCO World Heritage Site, its cobblestone streets, fortified walls, and centuries-old architecture transport visitors back in time. Wander through its quaint squares, such as Place Royale, lined with cafes and boutiques, or explore iconic landmarks like the imposing Château Frontenac overlooking the St. Lawrence River. From the bustling shops and restaurants of Petit-Champlain to the grandeur of the Citadelle and Parliament Building, Old Quebec offers a captivating blend of culture, history, and picturesque beauty. Whether strolling along its romantic streets, admiring its architectural marvels, or savoring French-inspired cuisine, Old Quebec enchants visitors with its timeless charm and ambiance.",
//         imageUrl: "/images/attractions/OldQuebex.jpg",
//       },
//       {
//         name: "Royal Ontario Museum (ROM) - Toronto, Ontario",
//         description:
//           "The Royal Ontario Museum (ROM) in Toronto, Ontario, is one of Canada's premier cultural institutions, renowned for its diverse collections and innovative exhibitions. With over six million artifacts spanning natural history, art, and world cultures, the museum offers a captivating journey through time and space. Its striking architectural design, featuring a mix of modern and historic elements, adds to its allure. Visitors can explore ancient civilizations, marvel at dinosaur skeletons, and admire contemporary art all under one roof. The ROM hosts special exhibitions, educational programs, and interactive displays, making it a vibrant hub of learning and discovery for visitors of all ages. From its iconic crystal addition to its extensive galleries, the museum showcases the wonders of the world past and present, making it a must-visit destination in Toronto",
//         imageUrl: "/images/attractions/RoyalOntarioMusuem.jpg",
//       },
//       {
//         name: "Banff National Park - Alberta",
//         description:
//           "Banff National Park in Alberta, Canada, is a breathtaking expanse of rugged mountains, turquoise lakes, and pristine wilderness. Established in 1885, it is Canada's oldest national park and a UNESCO World Heritage Site. Visitors flock to Banff to explore its vast network of hiking trails, ski slopes, and wildlife-rich habitats. Iconic landmarks like Lake Louise and Moraine Lake offer postcard-perfect views, while the charming town of Banff provides amenities and accommodations amidst stunning scenery. Whether skiing in winter, hiking in summer, or simply marveling at its natural beauty year-round, Banff National Park captivates all who venture into its majestic landscapes.",
//         imageUrl: "/images/attractions/BanffNationalParkAlberta.jpg",
//       },
//       {
//         name: "Whistler Blackcomb - Whistler, British Columbia",
//         description:
//           "Whistler Blackcomb in Whistler, British Columbia, is North America's largest ski resort, renowned for its world-class skiing and snowboarding opportunities. With over 8,000 acres of skiable terrain, including alpine bowls, glades, and groomed trails, it offers endless adventures for winter sports enthusiasts. The resort's vibrant village atmosphere boasts a plethora of dining, shopping, and entertainment options, creating a lively apres-ski scene. In the summer, Whistler Blackcomb transforms into a playground for outdoor activities such as mountain biking, hiking, and zip-lining. Its stunning mountain vistas and pristine landscapes make it a year-round destination for thrill-seekers and nature lovers alike.",
//         imageUrl: "/images/attractions/WhistlerBlackcomb.jpg",
//       },
//     ],
//   },
// ];

// // async function insertDefaultDestinations() {
// //   for (const destination of defaultExploreDestinations) {
// //     try {
// //       const newDestination = new ExploreDestination(destination);
// //       await newDestination.save();
// //       console.log("Default destination inserted:", newDestination);
// //     } catch (error) {
// //       console.error("Error inserting default destination:", error);
// //     }
// //   }
// // }
// defaultExploreDestinations.forEach(async (blog) => {
//   // await TravelBlog.deleteMany({});
//   const newBlog = new ExploreDestination(blog);
//   await newBlog.save();
//   newBlog.save();
//   // console.log("Blog inserted:", newBlog);
// });

// // Call the function to insert default destinations
// insertDefaultDestinations();
// module.exports = defaultExploreDestinations;

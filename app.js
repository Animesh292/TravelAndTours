require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const twilio = require("twilio");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const TravelBlog = require("./models/travelBlog");
const DefaultTravelBlogs = require("./models/defaultTravelBlogs");
const ExploreDestination = require("./models/exploreDestination");
const TravelGuide = require("./models/travelGuide");
const Comment = require("./models/comment");
const Feedback = require("./models/feedback");
const defaultTravelGuides = require("./controllers/travelGuide");
const exploreDefaultDestinations = require("./models/exploreDefaultDestinations");
const destinationRoute = require("./routes/destination");
const travelBlogRoute = require("./routes/travelBlog");
const handleUserRoute = require("./routes/user");
const handleTravelGuideRoute = require("./routes/travelGuide");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

const app = express();

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGOURL)
  .then((e) => console.log("MongoDB Connected"));

app.use(express.static(path.join(__dirname, "public")));
//middleware

app.set("view engine", "ejs");
app.set("public", path.resolve("./public"));

//using built-in express middleware to parse through form data
app.use(express.urlencoded({ extended: false }));
//or using external package body-parser which parses through the form data which is typically complex
app.use(bodyParser.urlencoded({ extended: true }));
//Similarly for json body we can use bodyParser or simply from express
app.use(bodyParser.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

// Owner's WhatsApp Number
const ownerWhatsAppNumber = "+917060993827";
// Twilio Credentials

const accountSid = "AC458fee60982c6808189ac051ffca5182";
const authToken = "63385d36776f66c5208554e1d27f1422";
const twilioNumber = "+14155238886";

//Initialize twilio client
const client = twilio(accountSid, authToken);

//Endpoint to handle form submission;
app.post("/home/send-message", (req, res) => {
  const countryCode = req.body.countrycode;
  const phoneNumber = req.body.phonenumber;
  const destination = req.body.destination;

  //Concatenate countrycode and phonenumber
  const recipient = countryCode + phoneNumber;

  client.messages
    .create({
      body: `New inquiry from ${recipient} for ${destination}`,
      from: `whatsapp:${twilioNumber}`,
      to: `whatsapp:${ownerWhatsAppNumber}`,
    })
    .then((message) => {
      console.log("Message sent to owner successfully", message.sid);
      res
        .status(201)
        .send(
          "Your inquiry has been received. We will get back to you shortly."
        );
    })
    .catch((error) => {
      console.error("Error sending message to owner", error);
      res.status(500).send("An error occurred while sending the message.");
    });
});

app.post("/home/feedback", async (req, res) => {
  const feedback = req.body.feedback;
  const feed = await Feedback.create({ content: feedback });
  console.log(feed);
  return res.status(201).send("Thank you for your Feedback.");
});

app.get("/home/About-us", (req, res) => {
  return res.render(path.resolve("public/Aboutus.ejs"));
});

app.use("/Destinations", destinationRoute);
app.use("/TravelBlog", travelBlogRoute);
app.use("/user", handleUserRoute);
app.use("/TravelGuide", handleTravelGuideRoute);
app.get("/", async (req, res) => {
  await TravelBlog.deleteMany({});
  const TravelBlogs = await TravelBlog.insertMany(DefaultTravelBlogs);
  return res.render(path.resolve("public/home.ejs"), {
    TravelBlogs,
    user: req.user,
  });
});

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));

const path = require("path");
const Destination = require("../models/destination");
const TravelGuide = require("../models/travelGuide");

const defaultTravelGuides = [
  {
    image: "/images/guide/chardhamyatrauttarakhand.jpg",
    place: ["चार धाम यात्रा", "Char Dham Yatra"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/ayodhya.jpg",
    place: ["अयोध्या", "Ayodhya"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/varanasi.jpg",
    place: ["वाराणसी", "Varanasi"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/vrindavan.jpg",
    place: ["वृंदावन", "Vrindavan"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/haridwar.jpg",
    place: ["हरिद्वार", "Haridwar"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/rishikesh.jpg",
    place: ["ऋषिकेश", "Rishikesh"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/auli.jpg",
    place: ["औली", "Auli"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/manali.jpg",
    place: ["मनाली", "Manali"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/shimla.jpg",
    place: ["शिमला", "Shimla"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/mussorie.jpg",
    place: ["मसूरी", "Mussorie"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/nainital.jpg",
    place: ["नैनीताल", "Nainital"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/chopta.jpg",
    place: ["चोपता", "Chopta"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/amritsar.jpg",
    place: ["अमृतसर", "Amritsar"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/delhi.jpg",
    place: ["दिल्ली", "Delhi"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
  {
    image: "/images/guide/udaipur.jpg",
    place: ["उदयपुर", "Udaipur"],
    duration: `<h3>Uttarakhand Char Dham Yatra Tour itinerary for 12 Days and 11 Nights</h3>`,
    itinerary: [
      {
        dayNum: "01:",
        fromTo: `<h6>Delhi to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 219kms, Duration :- 07/08 hrs approx</p>`,
      },
      {
        dayNum: "02:",
        fromTo: `<h6>Haridwar to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 217kms, Duration :- 8 hrs approx</p>`,
      },
      {
        dayNum: "03:",
        fromTo: `<h6>Syanachatti to Yamunotri to Syanachatti</h6>`,
        tripDetails: `<p>Distance :- 20 kms, Duration :- 1 hrs approx one way</p>`,
      },
      {
        dayNum: "04:",
        fromTo: `<h6>Syanachatti to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 110kms, Duration :- 05 hrs approx</p>`,
      },
      {
        dayNum: "05:",
        fromTo: `<h6>Uttarkashi to Gangotri to Uttarkashi</h6>`,
        tripDetails: `<p>Distance :- 100kms, Duration :- 04 hrs approx oneway</p>`,
      },
      {
        dayNum: "06:",
        fromTo: `<h6>Uttarkashi to Sitapur</h6>`,
        tripDetails: `<p>Distance :- 270kms, Duration :- 10 hrs approx</p>`,
      },
      {
        dayNum: "07:",
        fromTo: `<h6>Sitapur to Kedarnath</h6>`,
        tripDetails: `<p>18 kms trek</p>`,
      },
      {
        dayNum: "08:",
        fromTo: `<h6>Kedarnath to Sitapur</h6>`,
        tripDetails: `<p>Down 18 kms trek</p>`,
      },
      {
        dayNum: "09:",
        fromTo: `<h6>Sitapur to Badrinath</h6>`,
        tripDetails: `<p>Distance :- 253kms, Duration :- 13 hrs approx</p>`,
      },
      {
        dayNum: "10:",
        fromTo: `<h6>Badrinath Darshan - After drive to Srinagar</h6>`,
        tripDetails: `<p>Distance :- 200kms, Duration :- 7/8 hrs approx</p>`,
      },
      {
        dayNum: "11:",
        fromTo: `<h6>Srinagar to Haridwar</h6>`,
        tripDetails: `<p>Distance :- 130 kms, Duration :- 05/06 hrs approx</p>`,
      },
      {
        dayNum: "12:",
        fromTo: `<h6>Haridwar to Delhi</h6>`,
        tripDetails: `<p>Distance :- 219 kms, Duration :- 07 hrs approx</p>`,
      },
    ],
    inclusions: `
    <style>
  /* Apply custom style to the ul tag */
  ul {
    list-style-type: none; /* Remove default bullet style */
    padding-left: 0; /* Remove default left padding */
    margin-left: 4vw
  }

  /* Apply custom style to list items */
  li::before {
    content: "▹"; /* Use any symbol or custom content */
    color: #007bff; /* Change color as needed */
    margin-right: 5px; /* Adjust spacing between symbol and text */
    font-size: 2vw;
  }
</style>
    <ul>
    <li>Transportation service.</li>
    <li>Breakfast and Dinner.</li>
    <li>Accomodation in good hotel as per availability.</li>
    <li>For any other service, not in inclusions we will also provide it with some extra charge as per usage and requirement.</li>
    </ul>`,
  },
];

async function handleShowTravelGuide(req, res) {
  // const destination = await Destination.findOne({
  //   place: req.params.destination,
  // });
  // if (!destination) return res.status(404).send("No Such Destination");
  try {
    await TravelGuide.deleteMany({});
    await TravelGuide.insertMany(defaultTravelGuides);
    const travelguide = await TravelGuide.findOne({
      place: req.params.destination,
    });
    res.render(path.resolve("public/travelGuide.ejs"), {
      user: req.user,
      travelguide,
    });
  } catch (error) {
    console.error("Error showing travel Guide", error);
    res.status(500).send("Internal Server error");
  }
}

module.exports = {
  handleShowTravelGuide,
};

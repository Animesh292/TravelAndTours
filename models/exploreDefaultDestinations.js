const ExploreDestination = require("./exploreDestination");
const mongoose = require("mongoose");
const express = require("express");

//Function to get the coordinates of a location using Googlemaps Geocoding API
// async function getCoordinates(location) {
//   const apiKey = "AIzaSyBs5RY08EFRVI0J4zvoFnjeKKGda-ystp4";
//   try {
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//         location
//       )}&key=${apiKey}`
//     );
//     const data = await response.json();
//     if (data.results.length > 0) {
//       const location = data.results[0].geometry.location;
//       return { latitude: location.lat, longitude: location.lng };
//     } else {
//       throw new Error("Location not found");
//     }
//   } catch (error) {
//     console.error("Error fetching location:", error);
//     return null;
//   }
// }

const exploreDefaultDestinations = [
  {
    place: ["अयोध्या", "Ayodhya"],
    description: `<h2>Embark on an Odyssey of Serenity and Flavor in Ayodhya!</h2>
    <p>Step into Ayodhya, where every street echoes with tales of ancient glory and divine grace. Wander through the hallowed precincts of sacred temples, where the fragrance of incense and the chants of devotees fill the air, offering solace to weary souls. Lose yourself in the maze of narrow lanes, adorned with colorful bazaars brimming with spices, sweets, and handicrafts, each telling a story of tradition and craftsmanship passed down through generations. From the tranquil banks of the Sarayu River to the majestic domes of revered shrines, Ayodhya beckons you to explore its timeless treasures and experience the essence of spirituality, culture, and heritage woven into the fabric of this mystical city.</p>
    `,
    image: "/images/RamMandir1.jpg",
    exploreLink: "/explore/ayodhya",
    activities: [
      {
        activity: "Visit Ram Janmabhoomi Temple",
        image: "/images/activities/ayodhyaRamMandir.jpg",
      },
      {
        activity: "Explore Hanuman Garhi Temple",
        image: "/images/activities/hanumangarhi.jpg",
      },
      {
        activity: "Attend Aarti at Ghats",
        image: "/images/activities/sarayuAarti.jpg",
      },
      {
        activity: "Visit kanak Bhawan Temple",
        image: "/images/activities/kanakbhawan.jpg",
      },
      {
        activity: "Explore Guptar Ghat",
        image: "/images/activities/guptarghat.jpg",
      },
      {
        activity: "Visit Raj Dwar Temple",
        image: "/images/activities/rajdwarMandir.jpg",
      },
      {
        activity: "Visit Ram katha Park",
        image: "/images/activities/ramkathaPark.jpg",
      },
      {
        activity: "Visit Dashrath Mahal Ayodhya",
        image: "/images/activities/Dashrathmahalayodhya.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Kachoris",
        image: "/images/cuisines/kachori.jpg",
      },
      {
        cuisine: "Chaat",
        image: "/images/cuisines/chaat.jpg",
      },
      {
        cuisine: "Pedas",
        image: "/images/cuisines/pedas.jpg",
      },
      {
        cuisine: "Rabri",
        image: "/images/cuisines/Rabdi.jpg",
      },
      {
        cuisine: "Gulab Jamun",
        image: "/images/cuisines/gulabJamun.jpg",
      },
      {
        cuisine: "Dahi Vada",
        image: "/images/cuisines/DahiVada.jpg",
      },
      {
        cuisine: "Gujiya",
        image: "/images/cuisines/gujiya.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotel",
        image: "/images/hotels/Ramayanahotel.jpg",
        info: "Indulge in opulence at the Ramayana Hotel, offering lavish accommodations, world-class amenities, and unparalleled hospitality. Immerse yourself in luxury and comfort in the heart of Ayodhya.",
      },
      {
        accommodationType: "Mid-range Hotel",
        image: "/images/hotels/saryuhotel.jpg",
        info: "The Sarayu Hotel provides comfortable rooms and excellent hospitality, conveniently located near the Ram Janmabhoomi Temple.",
      },
      {
        accommodationType: "Budget Guest House",
        image: "/images/hotels/ganpatiGuestHouse.jpg",
        info: "Ganpati Guest House offers budget-friendly accommodations near Hanuman Garhi Temple, providing a homely atmosphere for travelers.",
      },
      {
        accommodationType: "Heritage Homestay",
        image: "/images/hotels/heritagehomestay.jpg",
        info: "Experience traditional hospitality at a heritage homestay, where guests can immerse themselves in the culture and history of Ayodhya.",
      },
      {
        accommodationType: "Dharamshala",
        image: "/images/hotels/shriramdharamshala.jpg",
        info: "Shri Ram Bhawan Dharamshala, managed by Shri Ram Janmabhoomi Teerth Kshetra Trust, offers affordable lodging options for pilgrims visiting Ayodhya.",
      },
    ],
    transportation: [
      `<h4>Road Transport</h4><p>Ayodhya is well-connected by road. It has a network of national and state highways connecting it to major cities and towns in Uttar Pradesh and other parts of India. Buses, taxis, and auto-rickshaws are commonly used for local transportation within the city.</p>`,
      `<h4>Rail Transport:</h4><p>The nearest major railway station is Ayodhya Junction (Ayodhya Cantt), which is located about 10 kilometers away from the city center. It is served by trains connecting Ayodhya to various cities across India.</p>`,
      `<h4>Air Transport:</h4><p>The Prime Minister of India, Shri Narendra Modi, inaugurated the newly built Ayodhya Airport, which has been named Maharishi Valmiki International Airport.
    The decision to name the airport after Maharishi Valmiki, the sage who authored the Hindu epic Ramayana, reflects the cultural and spiritual significance of Ayodhya.
    The airport's inauguration marks a significant milestone in connecting Ayodhya to the rest of India and the world.
    In the first phase of development, the airport can handle 10 lakh (1 million) passengers annually. After the second phase, it is expected to cater to 60 lakh (6 million) commuters annually.
    Phase 1 of the airport's construction cost more than Rs 1450 crore.
    The terminal building spans an area of 6500 sqm and is equipped with features to serve passengers comfortably.
    The facade of the terminal building reflects the temple architecture of the upcoming Shri Ram Mandir of Ayodhya.
    The interiors of the terminal building are adorned with local art, paintings, and murals depicting the life of Lord Ram.
    The airport incorporates various sustainability features such as insulated roofing, LED lighting, rainwater harvesting, landscaping with fountains, water treatment plants, sewage treatment plants, and a solar power plant, aiming for a GRIHA - 5 star rating.
    The airport is expected to enhance connectivity in the region, leading to increased tourism, business activities, and employment opportunities.
    This development is likely to have a significant positive impact on Ayodhya and its surrounding areas, boosting economic growth and cultural exchange.</p>`,
      `<h4>Waterways:</h4><p>While there are no major waterways directly serving Ayodhya, the city is situated on the banks of the Sarayu River. However, water transport is not a primary mode of transportation within the city.</p>`,
      `<h4>Intercity Smart Bus</h4><p>INTERCITY SMART BUS (LUXURY)
    Address: AYODHYA STATION ROAD, opp. SHRI RAM HOSPITAL, JALWA, Ayodhya, Uttar Pradesh 224123
    Phone: 094506 40210<p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Certainly! Ayodhya is one of the oldest and most revered cities in India, with a rich history, mythology, and significance deeply embedded in Hindu culture. Here's a description of its history, mythology, and significance:</p>
      <h4>History:</h4>
      <p>Ayodhya is believed to have been founded by Manu, the progenitor of humanity in Hindu mythology. It served as the capital of the ancient Kosala Kingdom.
      Over the centuries, Ayodhya flourished as a center of culture, trade, and religion. It witnessed the rule of various dynasties, including the Ikshvaku dynasty, to which Lord Rama belonged.
      The city has been a focal point of Hindu-Muslim relations in India due to the controversial Babri Masjid-Ram Janmabhoomi dispute. The dispute revolved around a mosque built by the Mughal Emperor Babur in the 16th century, believed to have been constructed over the birthplace of Lord Rama. The dispute was resolved in 2019 with a Supreme Court verdict allowing for the construction of a Hindu temple at the site.</p>
      <h4>Mythology:</h4>
      <p>Ayodhya is famously known as the birthplace of Lord Rama, the seventh avatar of the Hindu god Vishnu, as per Hindu mythology. Rama is revered as a model king (Maryada Purushottam) and embodiment of dharma (righteousness).
      The epic Ramayana, attributed to the sage Valmiki, narrates the life and adventures of Lord Rama, including his birth, exile, rescue of his wife Sita from the demon king Ravana, and return to Ayodhya to reclaim his throne.
      Ayodhya is also associated with other mythological figures such as King Dasharatha (Rama's father), Sita (Rama's wife), Lakshmana (Rama's brother), Bharata, and Shatrughna (Rama's half-brothers).</p>
      <h4>Significance:</h4>
      <p>Ayodhya holds immense religious significance for Hindus worldwide. It is considered one of the seven sacred cities (Sapta Puri) in Hinduism.
      Pilgrims visit Ayodhya to pay homage to Lord Rama and seek blessings at various temples and sacred sites associated with his life and the Ramayana.
      The city attracts millions of devotees during festivals like Ram Navami, Diwali, and Vivah Panchami, which commemorate events from the life of Lord Rama.
      Ayodhya serves as a symbol of Hindu heritage and cultural identity. Its history and mythology continue to inspire devotion, literature, art, and cultural practices in India and beyond.</p>
      `,
    },
    languages: `<p>Ayodhya, being located in the northern Indian state of Uttar Pradesh, is a diverse city with people speaking various languages. Here are the native languages and languages commonly spoken in Ayodhya:</p>
    <ul>
    <li><h5>Hindi:</h5> As the official language of India, Hindi is widely spoken and understood by the majority of the population in Ayodhya. It serves as the lingua franca for communication across different linguistic communities.</li>
    <li><h5>Awadhi:</h5> Awadhi is a vernacular language spoken primarily in the Awadh region of Uttar Pradesh, including Ayodhya. It holds cultural significance and is used in literature, folk songs, and everyday conversations among the local populace.</li>
    <li><h5>Bhojpuri:</h5> Bhojpuri is another regional language spoken in Ayodhya, especially by migrants and settlers from Bihar and eastern Uttar Pradesh. It is known for its vibrant folk culture, music, and cinema.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Ayodhya, particularly among the Muslim community. It has historical significance and is used in literature, poetry, and religious discourse.</li>
    <li><h5>English:</h5> With the spread of education and globalization, English serves as a secondary language in Ayodhya, especially in educational institutions, government offices, and among the urban population.</li>
    </ul>
    <p>These languages reflect the linguistic diversity and cultural heritage of Ayodhya, with Hindi and Awadhi being the predominant languages of everyday communication, while other languages are spoken by specific communities or groups within the city.</p>
    `,
    culture: {
      culture:
        "Ayodhya's cultural essence captivates visitors with its profound spiritual heritage, vibrant traditions, and timeless allure. Steeped in mythology and history, Ayodhya resonates with the echoes of ancient tales and religious fervor. From the resplendent temples adorned with intricate architecture to the rhythmic beats of classical music and dance, Ayodhya offers a rich tapestry of experiences. Its culinary delights tantalize the taste buds, while serene ghats along the Sarayu River provide tranquil sanctuaries for introspection. Ayodhya's bustling markets and cultural centers beckon exploration, promising glimpses into its literary and artistic legacy. Embracing Ayodhya's cultural ethos unveils a transformative journey, where every step reveals the city's timeless charm and spiritual essence.",
      image: "/images/culture/ayodhya.jpg",
    },
    travelTips: `<h4>Explore Local Cuisine:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Respect photograph Restrictions:</h4><p>Some temples and religious sites in Ayodhya may have restrictions on photography or videography. Always ask for permission before taking photos and adhere to any guidelines provided by local authorities or religious leaders.</p>
      <h4>Explore on Foot:</h4><p>Many of Ayodhya's attractions, including temples and ghats, are located in close proximity to each other. Consider exploring the city on foot to soak in its atmosphere and discover hidden gems along the way.</p>
      <h4>Try Local Cuisines:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave Ayodhya as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Ram Leela",
        desc: "Rama Leela is a dramatic reenactment of episodes from the Ramayana, depicting the life and adventures of Lord Rama.",
        image: "/images/events/AyodhyaRamLeela.jpg",
      },
      {
        event: "Diwali",
        desc: "Diwali, the festival of lights, holds special significance in Ayodhya as it marks the return of Lord Rama to the city after his 14-year exile.",
        image: "/images/events/Diwali.jpg",
      },
      {
        event: "Ram Navami",
        desc: " Celebrated with great enthusiasm, Ram Navami commemorates the birth of Lord Rama, the seventh avatar of Lord Vishnu.",
        image: "/images/events/RamNavami.jpg",
      },
      {
        event: "Vivah Panchami",
        desc: "Vivah Panchami commemorates the divine wedding of Lord Rama and Goddess Sita.",
        image: "/images/events/VivahPanchmi.jpg",
      },
      {
        event: "Hanuman Jayanti",
        desc: "Hanuman Jayanti celebrates the birth of Lord Hanuman, a devotee of Lord Rama and a central character in the Ramayana.",
        image: "/images/events/HanumanJayanti.jpg",
      },
    ],
    reviews: [
      {
        user: "JohnDoe",
        rating: 5,
        comment:
          "Canada is a beautiful country with friendly people. Highly recommend visiting!",
      },
      {
        user: "JaneSmith",
        rating: 4,
        comment: "Visited Canada for skiing, had an amazing time!",
      },
    ],
  },
  {
    place: ["वाराणसी", "Varanasi"],
    description: `<h2>Varanasi: Where Spiritual Essence Meets Timeless Tradition</h2>
        <p>Varanasi, located on the banks of the sacred Ganges River, is a timeless city steeped in spirituality and tradition. With ancient ghats, bustling bazaars, and revered temples, it's a place where visitors can immerse themselves in the rich tapestry of Hindu culture. From the mesmerizing Ganga Aarti ceremony at sunrise to the vibrant alleyways filled with the aroma of street food, Varanasi offers a unique and unforgettable experience that captivates the senses and nourishes the soul.</p>`,
    image: "/images/Varanasi.jpg",
    exploreLink: "/explore/Varanasi",
    activities: [
      {
        activity: "Boat ride on the ganges",
        image: "/images/activities/boatride.jpg",
      },
      {
        activity: "Attend Ganga Aarti",
        image: "/images/activities/gangaarti.jpg",
      },
      {
        activity: "Visit Temples and Ashrams",
        image: "/images/activities/temples.jpg",
      },
      {
        activity: "Indulge in street food of Varanasi",
        image: "/images/activities/streetfood.jpg",
      },
      {
        activity: "Yoga and meditation in Varanasi",
        image: "/images/activities/yogaandmeditation.jpg",
      },
      {
        activity: "Heritage walk",
        image: "/images/activities/heritagewalk.jpg",
      },
      {
        activity: "Attend cultural performances",
        image: "/images/activities/culturaltours.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Banarasi Chaat",
        image: "/images/cuisines/banarasichaat.jpg",
      },
      {
        cuisine: "Banarasi Paan",
        image: "/images/cuisines/banarasipaan.jpg",
      },
      {
        cuisine: "Malaiyo",
        image: "/images/cuisines/malaiyo.jpg",
      },
      {
        cuisine: "Baati Chokha",
        image: "/images/cuisines/baatichokha.jpg",
      },
      {
        cuisine: "Thandai",
        image: "/images/cuisines/thandai.jpg",
      },
      {
        cuisine: "Malai Toast",
        image: "/images/cuisines/malaitoast.jpg",
      },
      {
        cuisine: "Kachori Sabzi",
        image: "/images/cuisines/kachorisabzi.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotels and Resorts",
        image: "/images/hotels/luxuryvaranasi.jpg",
        info: " For those seeking a luxurious and indulgent stay, Varanasi boasts several upscale hotels and resorts that offer world-class amenities and services. These properties often feature spacious rooms and suites, fine dining restaurants, spa and wellness facilities, swimming pools, and concierge services to cater to every need.",
      },
      {
        accommodationType: "Heritage Havelis",
        image: "/images/hotels/heritagehaveli.jpg",
        info: "Varanasi is home to several beautifully restored heritage havelis (traditional mansions) that have been converted into boutique hotels. Staying in a heritage haveli allows guests to experience the city's rich history and architectural charm while enjoying modern comforts and personalized service.",
      },
      {
        accommodationType: "Ashrams and Yoga Retreats",
        image: "/images/hotels/varanasiashram.jpg",
        info: "Varanasi is a popular destination for spiritual seekers and yoga enthusiasts, and there are numerous ashrams and yoga retreats in and around the city that offer accommodation, meditation sessions, yoga classes, and spiritual teachings in serene and tranquil settings.",
      },
      {
        accommodationType: "Budget Hotels",
        image: "/images/hotels/budgethotels.jpg",
        info: "There are numerous budget hotels and lodges in Varanasi that provide comfortable accommodation at affordable rates. These hotels often offer amenities such as clean rooms, attached bathrooms, and basic facilities like Wi-Fi and room service.",
      },
      {
        accommodationType: "Guesthouses and Hostels",
        image: "/images/hotels/varanasiguesthouse.jpg",
        info: "Budget travelers and backpackers will find a plethora of guesthouses and hostels scattered throughout Varanasi, particularly in areas like the ghats and the old city. These accommodations typically offer basic amenities such as dormitory beds or private rooms, shared bathrooms, and common areas for socializing.",
      },
    ],
    transportation: [
      `<h4>City Buses:</h4><p> Varanasi has a network of city buses operated by the Uttar Pradesh State Road Transport Corporation (UPSRTC) that connect various parts of the city. While buses are generally affordable, they can be crowded and may not always adhere to strict schedules.</p>`,
      `<h4>Private Taxis:</h4><p>Private taxis and cabs are available for hire in Varanasi and can be booked through hotels, travel agencies, or online ride-hailing apps. Taxis are a convenient option for traveling longer distances or for exploring nearby attractions such as Sarnath or Ramnagar Fort.</p>`,
      `<h4>Auto Rickshaws:</h4><p>Auto rickshaws, also known as tuk-tuks, are a popular mode of transportation for short distances within the city. They are readily available and can be found at major intersections, bus stands, and railway stations. It's advisable to negotiate the fare with the driver before boarding.</p>`,
      `<h4>Walking:</h4><p> Varanasi is a pedestrian-friendly city, and many of its attractions, markets, and ghats are easily accessible on foot. Walking allows visitors to soak in the sights, sounds, and smells of the city at a leisurely pace and offers opportunities for spontaneous discoveries and interactions with locals.</p>`,
      `<h4>Trains:</h4><p>Varanasi Junction (also known as Varanasi Cantt) is one of the busiest railway stations in India and serves as a major transportation hub connecting Varanasi with other cities across the country. Regular trains operate to and from Varanasi, making it convenient for travelers to arrive by rail.<p>`,
      `<h4>Airport:</h4>Varanasi Airport which is also called Lal Bahadur Shastri Airport or Babatpur Airport is situated at a distance of about 18.9 Km to the north-west of the city center Varanasi. Varanasi is well connected with all the major cities of India like Delhi, Mumbai, and Lukhnow, etc and there is a daily direct flight from Varanasi Airport to New Delhi.<p></p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Understanding the history, mythology, and significance of Varanasi can greatly enrich one's experience while traveling to this ancient city:</p>
      <h4>History:</h4>
      <p>Varanasi is one of the oldest continually inhabited cities in the world, with a history that dates back over 3,000 years. It was a thriving center of trade and commerce in ancient India, situated at the crossroads of important trade routes.
      Throughout its history, Varanasi has been ruled by various dynasties, including the Mauryas, Guptas, Mughals, and Marathas, each leaving behind architectural, cultural, and religious legacies.
      Varanasi also played a significant role during the colonial period, attracting European scholars, artists, and writers who were drawn to its spiritual and cultural richness.
      </p>
      <h4>Mythology:</h4>
      <p>According to Hindu mythology, Varanasi is believed to be the abode of Lord Shiva, the Hindu god of destruction and transformation.
      Legend has it that Shiva established the city as his home and granted it divine protection.  Varanasi is also associated with the legend of the Ganges River. It is believed that the river descended from heaven to earth at Varanasi, bringing life-giving waters to the parched earth and purifying the souls of those who bathe in it.
      Varanasi is often referred to as "The City of Light" (Kashi) in Hindu scriptures, symbolizing spiritual enlightenment and liberation from the cycle of birth and death (samsara).</p>
      <h4>Significance:</h4>
      <p>Varanasi is considered the spiritual capital of India and is one of the holiest cities in Hinduism. It is a major pilgrimage destination for Hindus, who come to bathe in the sacred waters of the Ganges and perform rituals for the salvation of their ancestors.
      Varanasi is home to over 80 ghats (stone steps leading down to the river) where pilgrims gather for ritual bathing and cremation ceremonies. The city is also dotted with numerous temples dedicated to various Hindu deities, including the Kashi Vishwanath Temple dedicated to Lord Shiva.
      Varanasi is a treasure trove of cultural heritage, with its narrow winding lanes, bustling bazaars, and ancient architecture reflecting the rich tapestry of Indian traditions, rituals, and customs.
      Varanasi has a long tradition of learning and scholarship, with institutions like Banaras Hindu University (BHU) and traditional schools of music, dance, and philosophy attracting students and scholars from all over the world.</p>
      `,
    },
    languages: `<p>Varanasi, being a diverse and culturally rich city, is home to a variety of languages, both common and native. Here are some of the languages spoken in Varanasi:</p>
    <ul>
    <li><h5>Bhojpuri:</h5>Bhojpuri is a native language spoken by a significant portion of the population in Varanasi and surrounding regions. It is a Bihari language with its roots in the Bhojpuri region of Bihar and eastern Uttar Pradesh.</li>
    <li><h5>Maithili:</h5>Maithili, an Indo-Aryan language, is spoken by a small number of people in Varanasi, particularly those with roots in the Mithila region of Bihar and eastern Uttar Pradesh.</li>
    <li><h5>Awadhi:</h5>Awadhi is another native language spoken by some residents of Varanasi. It is closely related to Hindi and is primarily spoken in the Awadh region of Uttar Pradesh.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Varanasi, particularly among the Muslim community. It has a rich literary tradition and is commonly used for poetry, literature, and religious discourse.</li>
    <li><h5>English:</h5>English is also commonly spoken and understood in Varanasi, especially in areas frequented by tourists, hotels, restaurants, and other businesses catering to an international clientele.</li>
    <li><h5>Hindi:</h5>Hindi is the most widely spoken language in Varanasi and serves as the lingua franca for communication among people from different linguistic backgrounds. It is the official language of the state of Uttar Pradesh and is spoken by the majority of the population.</li>
    </ul>
    `,
    culture: {
      culture:
        "Varanasi, renowned as India's spiritual capital, is steeped in history, boasting ancient ghats, classical music, and colorful festivals like Dev Deepawali. Its Banarasi silk sarees, intricate crafts, and diverse street food offerings embody its rich cultural heritage. As the home of Banaras Hindu University, Varanasi thrives as an academic hub. Its culture, an intricate blend of spirituality, artistry, and learning, continues to enchant visitors with its timeless charm and profound significance.",
      image: "/images/culture/varanasi.jpg",
    },
    travelTips: `<h4>Use Reliable Transportation</h4><p>Opt for registered taxis or auto rickshaws from designated stands to ensure safety and avoid scams. Consider using ride-hailing apps for added convenience and security.</p>
      <h4>Plan Ahead for Ganga Aarti</h4><p>If you plan to witness the Ganga Aarti ceremony, arrive early to secure a good viewing spot, especially during peak tourist seasons. Be respectful during the ceremony and avoid obstructing others' views.</p>
      <h4>Explore the Ghats</h4><p>Take the time to explore the ghats of Varanasi, each with its own unique atmosphere and significance. Consider taking a boat ride along the Ganges to get a different perspective of the city.</p>
      <h4>Watch Your Belongings</h4><p>Like any other tourist destination, Varanasi can have its share of pickpockets and scams. Keep your belongings secure and be cautious of strangers offering unsolicited assistance or services.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave varanasi as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Dev Deepawali",
        desc: "Dev Deepawali, or the Diwali of the Gods, is celebrated on the occasion of Kartik Purnima, the full moon day in the month of Kartik (usually in November).",
        image: "/images/events/devdeepawali.jpg",
      },
      {
        event: "Maha Shivratri",
        desc: "Mahashivratri, the great night of Lord Shiva, is celebrated with immense fervor in Varanasi.",
        image: "/images/events/mahashivratri.jpg",
      },
      {
        event: "Ganga Aarti",
        desc: "  Ganga Aarti is a daily ritual performed at the Dashashwamedh Ghat in Varanasi, where priests offer prayers to the Ganges River.",
        image: "/images/events/gangaaarti.jpg",
      },
      {
        event: "Bharat Milap",
        desc: "Bharat Milap is an ancient tradition celebrated in Varanasi to commemorate the reunion of Lord Rama with his younger brother Bharata.",
        image: "/images/events/bharatMilap.jpg",
      },
      {
        event: "Sarnath excursions",
        desc: "While not technically an event in Varanasi, a visit to Sarnath, located just a short distance from the city, offers a profound spiritual experience.",
        image: "/images/events/Sarnath.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 4,
        comment:
          "Had an amazing time exploring Cameroon's diverse landscapes and cultures!",
      },
      {
        user: "AdventureSeeker",
        rating: 5,
        comment:
          "Cameroon exceeded all my expectations. Such a beautiful and welcoming country!",
      },
    ],
  },
  {
    place: ["चार धाम यात्रा ", "Char Dham Yatra"],
    description: `<h2>Embark on a Divine Journey: Chardham Yatra - Where Faith Meets Majesty</h2>
        <p>The Chardham Yatra is a revered pilgrimage journey that beckons devout Hindus to embark on a spiritual odyssey through the sacred sites nestled amidst the breathtaking Himalayas. Spanning four divine destinations – Yamunotri, Gangotri, Kedarnath, and Badrinath – this pilgrimage is steeped in religious significance and ancient mythology. Each site holds its own mystical charm and offers pilgrims the opportunity to seek blessings, cleanse their souls, and deepen their spiritual connection. The Chardham Yatra is not merely a journey; it is a profound quest for inner peace, enlightenment, and divine grace amidst the awe-inspiring beauty of nature's grandeur.</p>`,
    image: "/images/charddham.jpg",
    exploreLink: "/explore/charDham",
    activities: [
      {
        activity: "Yamunotri Temple",
        image: "/images/activities/yamunotritemple.jpg",
      },
      {
        activity: "Surya Kund and Divya Shila",
        image: "/images/activities/suryakund.jpg",
      },
      {
        activity: "Gangotri Temple",
        image: "/images/activities/gangotri.jpg",
      },
      {
        activity: "Gangotri Glacier",
        image: "/images/activities/gangotriglacier.jpg",
      },
      {
        activity: "Kedarnath Temple",
        image: "/images/activities/kedarnath.jpg",
      },
      {
        activity: "BhairavNath Temple",
        image: "/images/activities/bhairavnath.jpg",
      },
      {
        activity: "Badrinath Temple",
        image: "/images/activities/badrinath.jpg",
      },
      {
        activity: "Last Village of India- Mana",
        image: "/images/activities/Mana.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Garhwali cuisine: Phaanu",
        image: "/images/cuisines/phaanu.jpg",
      },
      {
        cuisine: "Garhwali cuisine: chainsoo",
        image: "/images/cuisines/chainsoo.jpg",
      },
      {
        cuisine: "Bhatt ki churkani",
        image: "/images/cuisines/bhattkichurkani.jpg",
      },
      {
        cuisine: "Tibetan Momos",
        image: "/images/cuisines/tibetanmomos.jpg",
      },
      {
        cuisine: "Singhara",
        image: "/images/cuisines/singhara.jpg",
      },
      {
        cuisine: "Kumaoni Raita",
        image: "/images/cuisines/kumaoniraita.jpg",
      },
      {
        cuisine: "Siddu",
        image: "/images/cuisines/siddu.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Dharamshalas/Ashrams",
        image: "/images/hotels/dharamshalascharDham.jpg",
        info: "Many pilgrimage sites have dharamshalas or ashrams that offer simple and affordable accommodation for pilgrims. These facilities typically provide basic amenities such as clean rooms, shared bathrooms, and communal dining areas.",
      },
      {
        accommodationType: "Guesthouses",
        image: "/images/hotels/chardhamguesthouses.jpg",
        info: "Several guesthouses and lodges are scattered around the pilgrimage sites, offering comfortable rooms with amenities like private bathrooms, hot water, and in-house dining options. These accommodations cater to pilgrims seeking a balance between comfort and affordability.",
      },
      {
        accommodationType: "Tented Camps",
        image: "/images/hotels/camps.jpg",
        info: "During peak pilgrimage seasons, temporary tented camps may be set up near the pilgrimage sites to accommodate the influx of pilgrims. These camps offer basic tent accommodations with shared facilities and dining options.",
      },
      {
        accommodationType: "Hotels and Resorts",
        image: "/images/hotels/hotelsandresorts.jpg",
        info: " In larger towns and cities near the pilgrimage sites, there are hotels and resorts ranging from budget to luxury categories. These accommodations provide a wide range of facilities and services, including comfortable rooms, restaurants, room service, Wi-Fi, and other modern amenities.",
      },
      {
        accommodationType: "Chardham Yatra Packages",
        image: "/images/hotels/packages.jpg",
        info: "Many travel agencies and tour operators offer Chardham Yatra tour packages that include accommodation arrangements along with transportation, meals, and guided tours. These packages cater to pilgrims who prefer a hassle-free travel experience with all arrangements taken care of.",
      },
    ],
    transportation: [
      `<p>Transportation facilities for travelers during the Chardham Yatra are available through various modes to ensure pilgrims can comfortably navigate the rugged terrain of the Himalayas. Here's an overview of transportation options:</p>`,
      `<h4>Road Transport:</h4><p>Government-operated buses ply on the routes connecting major towns and cities to the Chardham sites. These buses are affordable and provide a convenient mode of transportation for pilgrims.<br>Private taxis and cabs are available for hire at major towns and cities near the pilgrimage sites. They offer flexibility in terms of schedule and itinerary, making them ideal for small groups or families.</p>`,
      `<h4>Helicopter Services:</h4><p> Helicopter services are available for pilgrims who wish to skip the arduous trekking routes and reach the Chardham sites directly. These services offer a quicker and more comfortable travel option, albeit at a higher cost.</p>`,
      `<h4>Pony and Palanquin Services:</h4><p>For those unable to trek long distances on foot, pony and palanquin services are available at certain points along the trekking routes. Pilgrims can hire ponies or palanquins to cover the challenging stretches of the journey.</p>`,
      `<h4>Shared Jeeps and Sumos:</h4><p>Shared jeeps and sumos operate on designated routes connecting towns and villages to the Chardham sites. These shared vehicles offer a cost-effective mode of transportation for pilgrims, although they may be crowded during peak seasons.</p>`,
      `<h4>Rail Transport:</h4><p>Pilgrims can travel to the nearest railway stations, such as Haridwar, Rishikesh, Dehradun, or Kotdwar, and then continue their journey to the Chardham sites via road transport.<p>`,
      `<h4>Air Transport:</h4><p>The nearest airports to the Chardham sites are Jolly Grant Airport in Dehradun and Gauchar Airport in Uttarakhand. Pilgrims can fly to these airports and then proceed to the pilgrimage sites by road or helicopter.</p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>As a traveler, understanding the history, mythology, and significance of the Chardham sites enriches the pilgrimage experience, providing context and deeper spiritual connection. Here's a brief overview:</p>
      <h4>History:</h4>
      <p>The Chardham sites, comprising Yamunotri, Gangotri, Kedarnath, and Badrinath, hold ancient histories dating back thousands of years. These sacred sites have been revered pilgrimage destinations for Hindus for centuries, with mentions in ancient texts and scriptures.</p>
      <h4>Mythology:</h4>
      <p>Believed to be the source of the Yamuna River, bathing in its waters is considered purifying.<br>Originating from the Gangotri Glacier, the Ganges River is believed to cleanse sins when bathed in at Gangotri.<br>As one of the twelve Jyotirlingas, Lord Shiva's presence is felt here, and legend has it that he manifested as a bull to elude the Pandavas.<br>Dedicated to Lord Vishnu, it's said that he meditated here, and the Badrinath Temple was established by Adi Shankaracharya.</p>
      <h4>Significance:</h4>
      <p>The Chardham Yatra is believed to wash away sins and grant spiritual liberation (moksha).
      Pilgrims undertake the journey to seek the blessings of the gods and goddesses associated with each site.
      It is an opportunity for devotees to reconnect with their faith, perform rituals, and partake in spiritual practices.
      The rugged Himalayan terrain and serene surroundings provide a conducive environment for introspection and self-reflection.</p>
      `,
    },
    languages: `
    <ul>
    <li><h5>Garhwali:</h5>Garhwali is the regional language spoken in the Garhwal region of Uttarakhand, where the Chardham sites are located. While not as prevalent as Hindi, many locals communicate in Garhwali, especially in remote villages and rural areas.</li>
    <li><h5>Kumaoni:</h5>Kumaoni is another regional language spoken in parts of Uttarakhand, particularly in areas surrounding the Chardham sites. Similar to Garhwali, it may be encountered in interactions with locals.</li>
    <li><h5>Hindi:</h5>As the official language of India, Hindi is widely spoken and understood by locals and travelers alike. It serves as a common means of communication throughout the Chardham route.</li>
    <li><h5>Sanskrit and Vedic Chants:</h5> During religious ceremonies, prayers, and rituals at the Chardham sites, Sanskrit and Vedic chants may be recited by priests. While not conversational languages, they hold deep spiritual significance for devotees participating in the rituals.</li>
    <li><h5>English:</h5> In tourist areas and establishments catering to travelers, English is often spoken, especially by hotel staff, tour guides, and shopkeepers. It can be useful for travelers who are not proficient in Hindi or regional languages.</li>
    </ul>
    <p>Travelers on the Chardham Yatra can navigate the linguistic diversity of the region with a basic understanding of Hindi and English. However, learning a few local phrases or greetings in Garhwali or Kumaoni can enhance cultural interactions and enrich the pilgrimage experience.</p>
    `,
    culture: {
      culture:
        "The Char Dham Yatra is a revered pilgrimage journey through the breathtaking landscapes of Uttarakhand, India. Spanning four sacred sites—Yamunotri, Gangotri, Kedarnath, and Badrinath—it offers travelers a profound cultural and spiritual experience. Embarking on this journey means traversing rugged terrains, encountering ancient temples, and immersing oneself in the rich tapestry of Hindu mythology. Beyond the religious significance, it's a chance to connect with fellow pilgrims, engage in acts of service, and witness the timeless traditions of devotion. The Char Dham Yatra promises not just a physical adventure but a soul-stirring odyssey through the heart of India's spiritual heritage.",
      image: "/images/culture/CHARDHAMCULTURE1.jpg",
    },
    travelTips: `<h4>Travel Documentation:</h4><p>Carry all necessary travel documents, including identification, permits (if required), and emergency contact information.</p>
      <h4>Accommodation Booking:</h4><p>Plan your accommodation in advance, especially during peak pilgrimage seasons when accommodations may be limited. Book hotels or guesthouses along the route to ensure a comfortable stay.</p>
      <h4>Weather Awareness:</h4><p>Uttarakhand's weather can be unpredictable, especially in higher altitudes. Be prepared for sudden changes in weather by packing layers, waterproof clothing, and sturdy footwear.</p>
      <h4>Physical Fitness:</h4><p> The yatra involves trekking, walking long distances, and navigating challenging terrains. Ensure you are physically fit and acclimatized to high altitudes before embarking on the journey.</p>
      <h4>Travel Insurance:</h4><p>Consider purchasing travel insurance that covers medical emergencies, trip cancellations, and evacuation services, especially when traveling to remote areas.</p>
      `,
    events: [
      {
        event: "Opening and Closing Ceremonies",
        desc: "The temples of Yamunotri, Gangotri, Kedarnath, and Badrinath typically have opening and closing ceremonies at the beginning and end of the pilgrimage season, respectively.",
        image: "/images/events/chardhamevents.jpg",
      },
      {
        event: "Yamunotri and Gangotri Snan",
        desc: " Devotees often take ritual baths (snan) in the Yamuna and Ganga rivers at Yamunotri and Gangotri, respectively, as part of their pilgrimage. ",
        image: "/images/events/gangasnan.jpg",
      },
      {
        event: "Ganga Dussehra",
        desc: " Celebrated at Gangotri in May or June, Ganga Dussehra is a festival dedicated to Goddess Ganga.",
        image: "/images/events/gangadussehra.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Kenya is a magical destination with breathtaking landscapes and unforgettable wildlife experiences!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Had an incredible time exploring Kenya's national parks and interacting with local communities.",
      },
    ],
  },
  {
    place: ["औली", "Auli"],
    description: `<h2>Auli: Majestic Fjords and Northern Wonders</h2>
        <p>Nestled in Scandinavia, Norway captivates with its dramatic landscapes, pristine wilderness, and vibrant cities. Explore the iconic fjords, where towering cliffs plunge into crystalline waters, offering breathtaking vistas at every turn. Immerse yourself in the enchanting beauty of the Northern Lights dancing across the Arctic sky during winter nights. In summer, experience the midnight sun illuminating the stunning Norwegian countryside. Discover charming coastal towns like Bergen and Tromsø, each with its own unique charm and cultural heritage. Whether you're chasing the aurora borealis, hiking through verdant forests, or savoring fresh seafood by the waterfront, Norway promises an unforgettable adventure in the heart of Scandinavia.</p>`,
    image: "/images/Auli.jpg",
    exploreLink: "/explore/Auli",
    activities: [
      {
        activity: "Fjord Cruises",
        image: "/images/activities/FjordCruises.jpg",
      },
      {
        activity: "Hiking",
        image: "/images/activities/Hiking3.jpg",
      },
      {
        activity: "Skiing",
        image: "/images/activities/Skiing1.jpg",
      },
      {
        activity: "NorthernLights Tour",
        image: "/images/activities/NorthernLights.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Gravlaks",
        image: "/images/cuisines/Gravlaks.jpg",
      },
      {
        cuisine: "Brunost",
        image: "/images/cuisines/Brunost.jpg",
      },
      {
        cuisine: "Rakfisk",
        image: "/images/cuisines/Rakfisk.jpg",
      },
      {
        cuisine: "Krumkake",
        image: "/images/cuisines/Krumkake.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotel",
        image: "/images/hotels/Ramayanahotel.jpg",
        info: "Indulge in opulence at the Ramayana Hotel, offering lavish accommodations, world-class amenities, and unparalleled hospitality. Immerse yourself in luxury and comfort in the heart of Ayodhya.",
      },
      {
        accommodationType: "Mid-range Hotel",
        image: "/images/hotels/saryuhotel.jpg",
        info: "The Sarayu Hotel provides comfortable rooms and excellent hospitality, conveniently located near the Ram Janmabhoomi Temple.",
      },
      {
        accommodationType: "Budget Guest House",
        image: "/images/hotels/ganpatiGuestHouse.jpg",
        info: "Ganpati Guest House offers budget-friendly accommodations near Hanuman Garhi Temple, providing a homely atmosphere for travelers.",
      },
      {
        accommodationType: "Heritage Homestay",
        image: "/images/hotels/heritagehomestay.jpg",
        info: "Experience traditional hospitality at a heritage homestay, where guests can immerse themselves in the culture and history of Ayodhya.",
      },
      {
        accommodationType: "Dharamshala",
        image: "/images/hotels/shriramdharamshala.jpg",
        info: "Shri Ram Bhawan Dharamshala, managed by Shri Ram Janmabhoomi Teerth Kshetra Trust, offers affordable lodging options for pilgrims visiting Ayodhya.",
      },
    ],
    transportation: [
      `<h4>Road Transport</h4><p>Ayodhya is well-connected by road. It has a network of national and state highways connecting it to major cities and towns in Uttar Pradesh and other parts of India. Buses, taxis, and auto-rickshaws are commonly used for local transportation within the city.</p>`,
      `<h4>Rail Transport:</h4><p>The nearest major railway station is Ayodhya Junction (Ayodhya Cantt), which is located about 10 kilometers away from the city center. It is served by trains connecting Ayodhya to various cities across India.</p>`,
      `<h4>Air Transport:</h4><p>The Prime Minister of India, Shri Narendra Modi, inaugurated the newly built Ayodhya Airport, which has been named Maharishi Valmiki International Airport.
    The decision to name the airport after Maharishi Valmiki, the sage who authored the Hindu epic Ramayana, reflects the cultural and spiritual significance of Ayodhya.
    The airport's inauguration marks a significant milestone in connecting Ayodhya to the rest of India and the world.
    In the first phase of development, the airport can handle 10 lakh (1 million) passengers annually. After the second phase, it is expected to cater to 60 lakh (6 million) commuters annually.
    Phase 1 of the airport's construction cost more than Rs 1450 crore.
    The terminal building spans an area of 6500 sqm and is equipped with features to serve passengers comfortably.
    The facade of the terminal building reflects the temple architecture of the upcoming Shri Ram Mandir of Ayodhya.
    The interiors of the terminal building are adorned with local art, paintings, and murals depicting the life of Lord Ram.
    The airport incorporates various sustainability features such as insulated roofing, LED lighting, rainwater harvesting, landscaping with fountains, water treatment plants, sewage treatment plants, and a solar power plant, aiming for a GRIHA - 5 star rating.
    The airport is expected to enhance connectivity in the region, leading to increased tourism, business activities, and employment opportunities.
    This development is likely to have a significant positive impact on Ayodhya and its surrounding areas, boosting economic growth and cultural exchange.</p>`,
      `<h4>Waterways:</h4><p>While there are no major waterways directly serving Ayodhya, the city is situated on the banks of the Sarayu River. However, water transport is not a primary mode of transportation within the city.</p>`,
      `<h4>Intercity Smart Bus</h4><p>INTERCITY SMART BUS (LUXURY)
    Address: AYODHYA STATION ROAD, opp. SHRI RAM HOSPITAL, JALWA, Ayodhya, Uttar Pradesh 224123
    Phone: 094506 40210<p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Certainly! Ayodhya is one of the oldest and most revered cities in India, with a rich history, mythology, and significance deeply embedded in Hindu culture. Here's a description of its history, mythology, and significance:</p>
      <h4>History:</h4>
      <p>Ayodhya is believed to have been founded by Manu, the progenitor of humanity in Hindu mythology. It served as the capital of the ancient Kosala Kingdom.
      Over the centuries, Ayodhya flourished as a center of culture, trade, and religion. It witnessed the rule of various dynasties, including the Ikshvaku dynasty, to which Lord Rama belonged.
      The city has been a focal point of Hindu-Muslim relations in India due to the controversial Babri Masjid-Ram Janmabhoomi dispute. The dispute revolved around a mosque built by the Mughal Emperor Babur in the 16th century, believed to have been constructed over the birthplace of Lord Rama. The dispute was resolved in 2019 with a Supreme Court verdict allowing for the construction of a Hindu temple at the site.</p>
      <h4>Mythology:</h4>
      <p>Ayodhya is famously known as the birthplace of Lord Rama, the seventh avatar of the Hindu god Vishnu, as per Hindu mythology. Rama is revered as a model king (Maryada Purushottam) and embodiment of dharma (righteousness).
      The epic Ramayana, attributed to the sage Valmiki, narrates the life and adventures of Lord Rama, including his birth, exile, rescue of his wife Sita from the demon king Ravana, and return to Ayodhya to reclaim his throne.
      Ayodhya is also associated with other mythological figures such as King Dasharatha (Rama's father), Sita (Rama's wife), Lakshmana (Rama's brother), Bharata, and Shatrughna (Rama's half-brothers).</p>
      <h4>Significance:</h4>
      <p>Ayodhya holds immense religious significance for Hindus worldwide. It is considered one of the seven sacred cities (Sapta Puri) in Hinduism.
      Pilgrims visit Ayodhya to pay homage to Lord Rama and seek blessings at various temples and sacred sites associated with his life and the Ramayana.
      The city attracts millions of devotees during festivals like Ram Navami, Diwali, and Vivah Panchami, which commemorate events from the life of Lord Rama.
      Ayodhya serves as a symbol of Hindu heritage and cultural identity. Its history and mythology continue to inspire devotion, literature, art, and cultural practices in India and beyond.</p>
      `,
    },
    languages: `<p>Ayodhya, being located in the northern Indian state of Uttar Pradesh, is a diverse city with people speaking various languages. Here are the native languages and languages commonly spoken in Ayodhya:</p>
    <ul>
    <li><h5>Hindi:</h5> As the official language of India, Hindi is widely spoken and understood by the majority of the population in Ayodhya. It serves as the lingua franca for communication across different linguistic communities.</li>
    <li><h5>Awadhi:</h5> Awadhi is a vernacular language spoken primarily in the Awadh region of Uttar Pradesh, including Ayodhya. It holds cultural significance and is used in literature, folk songs, and everyday conversations among the local populace.</li>
    <li><h5>Bhojpuri:</h5> Bhojpuri is another regional language spoken in Ayodhya, especially by migrants and settlers from Bihar and eastern Uttar Pradesh. It is known for its vibrant folk culture, music, and cinema.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Ayodhya, particularly among the Muslim community. It has historical significance and is used in literature, poetry, and religious discourse.</li>
    <li><h5>English:</h5> With the spread of education and globalization, English serves as a secondary language in Ayodhya, especially in educational institutions, government offices, and among the urban population.</li>
    </ul>
    <p>These languages reflect the linguistic diversity and cultural heritage of Ayodhya, with Hindi and Awadhi being the predominant languages of everyday communication, while other languages are spoken by specific communities or groups within the city.</p>
    `,
    culture: {
      culture:
        "Ayodhya's cultural essence captivates visitors with its profound spiritual heritage, vibrant traditions, and timeless allure. Steeped in mythology and history, Ayodhya resonates with the echoes of ancient tales and religious fervor. From the resplendent temples adorned with intricate architecture to the rhythmic beats of classical music and dance, Ayodhya offers a rich tapestry of experiences. Its culinary delights tantalize the taste buds, while serene ghats along the Sarayu River provide tranquil sanctuaries for introspection. Ayodhya's bustling markets and cultural centers beckon exploration, promising glimpses into its literary and artistic legacy. Embracing Ayodhya's cultural ethos unveils a transformative journey, where every step reveals the city's timeless charm and spiritual essence.",
      image: "/images/culture/ayodhya.jpg",
    },
    travelTips: `<h4>Plan Your Visit Around Festivals:</h4><p>Ayodhya is known for its vibrant festivals, such as Ram Navami and Diwali. Consider planning your visit during these times to experience the city's cultural celebrations and festivities firsthand.</p>
      <h4>Respect photograph Restrictions:</h4><p>Some temples and religious sites in Ayodhya may have restrictions on photography or videography. Always ask for permission before taking photos and adhere to any guidelines provided by local authorities or religious leaders.</p>
      <h4>Explore on Foot:</h4><p>Many of Ayodhya's attractions, including temples and ghats, are located in close proximity to each other. Consider exploring the city on foot to soak in its atmosphere and discover hidden gems along the way.</p>
      <h4>Try Local Cuisines:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave Ayodhya as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Ram Leela",
        desc: "Rama Leela is a dramatic reenactment of episodes from the Ramayana, depicting the life and adventures of Lord Rama.",
        image: "/images/events/AyodhyaRamLeela.jpg",
      },
      {
        event: "Diwali",
        desc: "Diwali, the festival of lights, holds special significance in Ayodhya as it marks the return of Lord Rama to the city after his 14-year exile.",
        image: "/images/events/Diwali.jpg",
      },
      {
        event: "Ram Navami",
        desc: " Celebrated with great enthusiasm, Ram Navami commemorates the birth of Lord Rama, the seventh avatar of Lord Vishnu.",
        image: "/images/events/RamNavami.jpg",
      },
      {
        event: "Vivah Panchami",
        desc: "Vivah Panchami commemorates the divine wedding of Lord Rama and Goddess Sita.",
        image: "/images/events/VivahPanchmi.jpg",
      },
      {
        event: "Hanuman Jayanti",
        desc: "Hanuman Jayanti celebrates the birth of Lord Hanuman, a devotee of Lord Rama and a central character in the Ramayana.",
        image: "/images/events/HanumanJayanti.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Norway's natural beauty is truly breathtaking. A must-visit destination for outdoor enthusiasts!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Enjoyed exploring Norway's stunning fjords and experiencing the unique culture.",
      },
    ],
  },
  {
    place: ["मनाली", "Manali"],
    description: `<h2>Greece: Cradle of Civilization and Mediterranean Charms</h2>
        <p>Greece, birthplace of democracy and ancient civilization, beckons travelers with its rich history, stunning landscapes, and vibrant culture. Explore iconic landmarks like the Acropolis in Athens, where ancient ruins stand as a testament to the glory of classical Greece. Delve into the enchanting island life of Santorini, with its whitewashed buildings perched on cliffs overlooking the Aegean Sea, creating postcard-perfect views at every turn. Discover the archaeological wonders of Delphi, where the Oracle of Apollo once spoke, and the ancient theater of Epidaurus, renowned for its remarkable acoustics. Indulge in delectable Mediterranean cuisine, from fresh seafood to savory souvlaki, accompanied by local wines and ouzo. Whether you're soaking up the sun on golden beaches, wandering through picturesque villages, or exploring archaeological sites steeped in myth and legend, Greece offers an unforgettable journey through time and culture in the heart of the Mediterranean.</p>`,
    image: "/images/Manali.jpg",
    exploreLink: "/explore/Manali",
    activities: [
      {
        activity: "Visiting Ancient Ruins",
        image: "/images/activities/AncientRuins.jpg",
      },
      {
        activity: "Island Hoping",
        image: "/images/activities/IslandHoping.jpg",
      },
      {
        activity: "Sunbathing",
        image: "/images/activities/Sunbathing.jpg",
      },
      {
        activity: "Sailing",
        image: "/images/activities/Sailing.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Moussaka",
        image: "/images/cuisines/Moussaka.jpg",
      },
      {
        cuisine: "Souvlaki",
        image: "/images/cuisines/Souvlaki.jpg",
      },
      {
        cuisine: "Greek Salad",
        image: "/images/cuisines/GreekSalad.jpg",
      },
      {
        cuisine: "Baklava",
        image: "/images/cuisines/Baklava.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotel",
        image: "/images/hotels/Ramayanahotel.jpg",
        info: "Indulge in opulence at the Ramayana Hotel, offering lavish accommodations, world-class amenities, and unparalleled hospitality. Immerse yourself in luxury and comfort in the heart of Ayodhya.",
      },
      {
        accommodationType: "Mid-range Hotel",
        image: "/images/hotels/saryuhotel.jpg",
        info: "The Sarayu Hotel provides comfortable rooms and excellent hospitality, conveniently located near the Ram Janmabhoomi Temple.",
      },
      {
        accommodationType: "Budget Guest House",
        image: "/images/hotels/ganpatiGuestHouse.jpg",
        info: "Ganpati Guest House offers budget-friendly accommodations near Hanuman Garhi Temple, providing a homely atmosphere for travelers.",
      },
      {
        accommodationType: "Heritage Homestay",
        image: "/images/hotels/heritagehomestay.jpg",
        info: "Experience traditional hospitality at a heritage homestay, where guests can immerse themselves in the culture and history of Ayodhya.",
      },
      {
        accommodationType: "Dharamshala",
        image: "/images/hotels/shriramdharamshala.jpg",
        info: "Shri Ram Bhawan Dharamshala, managed by Shri Ram Janmabhoomi Teerth Kshetra Trust, offers affordable lodging options for pilgrims visiting Ayodhya.",
      },
    ],
    transportation: [
      `<h4>Road Transport</h4><p>Ayodhya is well-connected by road. It has a network of national and state highways connecting it to major cities and towns in Uttar Pradesh and other parts of India. Buses, taxis, and auto-rickshaws are commonly used for local transportation within the city.</p>`,
      `<h4>Rail Transport:</h4><p>The nearest major railway station is Ayodhya Junction (Ayodhya Cantt), which is located about 10 kilometers away from the city center. It is served by trains connecting Ayodhya to various cities across India.</p>`,
      `<h4>Air Transport:</h4><p>The Prime Minister of India, Shri Narendra Modi, inaugurated the newly built Ayodhya Airport, which has been named Maharishi Valmiki International Airport.
    The decision to name the airport after Maharishi Valmiki, the sage who authored the Hindu epic Ramayana, reflects the cultural and spiritual significance of Ayodhya.
    The airport's inauguration marks a significant milestone in connecting Ayodhya to the rest of India and the world.
    In the first phase of development, the airport can handle 10 lakh (1 million) passengers annually. After the second phase, it is expected to cater to 60 lakh (6 million) commuters annually.
    Phase 1 of the airport's construction cost more than Rs 1450 crore.
    The terminal building spans an area of 6500 sqm and is equipped with features to serve passengers comfortably.
    The facade of the terminal building reflects the temple architecture of the upcoming Shri Ram Mandir of Ayodhya.
    The interiors of the terminal building are adorned with local art, paintings, and murals depicting the life of Lord Ram.
    The airport incorporates various sustainability features such as insulated roofing, LED lighting, rainwater harvesting, landscaping with fountains, water treatment plants, sewage treatment plants, and a solar power plant, aiming for a GRIHA - 5 star rating.
    The airport is expected to enhance connectivity in the region, leading to increased tourism, business activities, and employment opportunities.
    This development is likely to have a significant positive impact on Ayodhya and its surrounding areas, boosting economic growth and cultural exchange.</p>`,
      `<h4>Waterways:</h4><p>While there are no major waterways directly serving Ayodhya, the city is situated on the banks of the Sarayu River. However, water transport is not a primary mode of transportation within the city.</p>`,
      `<h4>Intercity Smart Bus</h4><p>INTERCITY SMART BUS (LUXURY)
    Address: AYODHYA STATION ROAD, opp. SHRI RAM HOSPITAL, JALWA, Ayodhya, Uttar Pradesh 224123
    Phone: 094506 40210<p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Certainly! Ayodhya is one of the oldest and most revered cities in India, with a rich history, mythology, and significance deeply embedded in Hindu culture. Here's a description of its history, mythology, and significance:</p>
      <h4>History:</h4>
      <p>Ayodhya is believed to have been founded by Manu, the progenitor of humanity in Hindu mythology. It served as the capital of the ancient Kosala Kingdom.
      Over the centuries, Ayodhya flourished as a center of culture, trade, and religion. It witnessed the rule of various dynasties, including the Ikshvaku dynasty, to which Lord Rama belonged.
      The city has been a focal point of Hindu-Muslim relations in India due to the controversial Babri Masjid-Ram Janmabhoomi dispute. The dispute revolved around a mosque built by the Mughal Emperor Babur in the 16th century, believed to have been constructed over the birthplace of Lord Rama. The dispute was resolved in 2019 with a Supreme Court verdict allowing for the construction of a Hindu temple at the site.</p>
      <h4>Mythology:</h4>
      <p>Ayodhya is famously known as the birthplace of Lord Rama, the seventh avatar of the Hindu god Vishnu, as per Hindu mythology. Rama is revered as a model king (Maryada Purushottam) and embodiment of dharma (righteousness).
      The epic Ramayana, attributed to the sage Valmiki, narrates the life and adventures of Lord Rama, including his birth, exile, rescue of his wife Sita from the demon king Ravana, and return to Ayodhya to reclaim his throne.
      Ayodhya is also associated with other mythological figures such as King Dasharatha (Rama's father), Sita (Rama's wife), Lakshmana (Rama's brother), Bharata, and Shatrughna (Rama's half-brothers).</p>
      <h4>Significance:</h4>
      <p>Ayodhya holds immense religious significance for Hindus worldwide. It is considered one of the seven sacred cities (Sapta Puri) in Hinduism.
      Pilgrims visit Ayodhya to pay homage to Lord Rama and seek blessings at various temples and sacred sites associated with his life and the Ramayana.
      The city attracts millions of devotees during festivals like Ram Navami, Diwali, and Vivah Panchami, which commemorate events from the life of Lord Rama.
      Ayodhya serves as a symbol of Hindu heritage and cultural identity. Its history and mythology continue to inspire devotion, literature, art, and cultural practices in India and beyond.</p>
      `,
    },
    languages: `<p>Ayodhya, being located in the northern Indian state of Uttar Pradesh, is a diverse city with people speaking various languages. Here are the native languages and languages commonly spoken in Ayodhya:</p>
    <ul>
    <li><h5>Hindi:</h5> As the official language of India, Hindi is widely spoken and understood by the majority of the population in Ayodhya. It serves as the lingua franca for communication across different linguistic communities.</li>
    <li><h5>Awadhi:</h5> Awadhi is a vernacular language spoken primarily in the Awadh region of Uttar Pradesh, including Ayodhya. It holds cultural significance and is used in literature, folk songs, and everyday conversations among the local populace.</li>
    <li><h5>Bhojpuri:</h5> Bhojpuri is another regional language spoken in Ayodhya, especially by migrants and settlers from Bihar and eastern Uttar Pradesh. It is known for its vibrant folk culture, music, and cinema.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Ayodhya, particularly among the Muslim community. It has historical significance and is used in literature, poetry, and religious discourse.</li>
    <li><h5>English:</h5> With the spread of education and globalization, English serves as a secondary language in Ayodhya, especially in educational institutions, government offices, and among the urban population.</li>
    </ul>
    <p>These languages reflect the linguistic diversity and cultural heritage of Ayodhya, with Hindi and Awadhi being the predominant languages of everyday communication, while other languages are spoken by specific communities or groups within the city.</p>
    `,
    culture: {
      culture:
        "Ayodhya's cultural essence captivates visitors with its profound spiritual heritage, vibrant traditions, and timeless allure. Steeped in mythology and history, Ayodhya resonates with the echoes of ancient tales and religious fervor. From the resplendent temples adorned with intricate architecture to the rhythmic beats of classical music and dance, Ayodhya offers a rich tapestry of experiences. Its culinary delights tantalize the taste buds, while serene ghats along the Sarayu River provide tranquil sanctuaries for introspection. Ayodhya's bustling markets and cultural centers beckon exploration, promising glimpses into its literary and artistic legacy. Embracing Ayodhya's cultural ethos unveils a transformative journey, where every step reveals the city's timeless charm and spiritual essence.",
      image: "/images/culture/ayodhya.jpg",
    },
    travelTips: `<h4>Plan Your Visit Around Festivals:</h4><p>Ayodhya is known for its vibrant festivals, such as Ram Navami and Diwali. Consider planning your visit during these times to experience the city's cultural celebrations and festivities firsthand.</p>
      <h4>Respect photograph Restrictions:</h4><p>Some temples and religious sites in Ayodhya may have restrictions on photography or videography. Always ask for permission before taking photos and adhere to any guidelines provided by local authorities or religious leaders.</p>
      <h4>Explore on Foot:</h4><p>Many of Ayodhya's attractions, including temples and ghats, are located in close proximity to each other. Consider exploring the city on foot to soak in its atmosphere and discover hidden gems along the way.</p>
      <h4>Try Local Cuisines:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave Ayodhya as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Ram Leela",
        desc: "Rama Leela is a dramatic reenactment of episodes from the Ramayana, depicting the life and adventures of Lord Rama.",
        image: "/images/events/AyodhyaRamLeela.jpg",
      },
      {
        event: "Diwali",
        desc: "Diwali, the festival of lights, holds special significance in Ayodhya as it marks the return of Lord Rama to the city after his 14-year exile.",
        image: "/images/events/Diwali.jpg",
      },
      {
        event: "Ram Navami",
        desc: " Celebrated with great enthusiasm, Ram Navami commemorates the birth of Lord Rama, the seventh avatar of Lord Vishnu.",
        image: "/images/events/RamNavami.jpg",
      },
      {
        event: "Vivah Panchami",
        desc: "Vivah Panchami commemorates the divine wedding of Lord Rama and Goddess Sita.",
        image: "/images/events/VivahPanchmi.jpg",
      },
      {
        event: "Hanuman Jayanti",
        desc: "Hanuman Jayanti celebrates the birth of Lord Hanuman, a devotee of Lord Rama and a central character in the Ramayana.",
        image: "/images/events/HanumanJayanti.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Greece is a dream destination with beautiful beaches, delicious food, and fascinating history!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Had an amazing time exploring the Greek islands and experiencing the local culture.",
      },
    ],
  },
  {
    place: ["ऋषिकेश", "Rishikesh"],
    description: `<h2>Mauritius: Tropical Paradise</h2>
        <p>Discover Mauritius, where azure waters meet pristine beaches and vibrant culture. Dive into crystal-clear seas teeming with marine life, or relax on powdery white sands fringed by swaying palms. Immerse yourself in the island's rich heritage through colorful markets, lively Sega music, and diverse cuisine. Explore lush rainforests, zip-line across dramatic landscapes, or tee off on world-class golf courses. Uncover colonial-era architecture in Port Louis, then unwind in luxury resorts offering pampering spas and romantic dining. Mauritius: a captivating blend of relaxation, adventure, and cultural charm awaits.</p>`,
    image: "/images/Rishikesh.jpg",
    exploreLink: "/explore/Rishikesh",
    activities: [
      {
        activity: "Snorkeling",
        image: "/images/activities/Snorkeling.jpg",
      },
      {
        activity: "Diving",
        image: "/images/activities/Diving.jpg",
      },
      {
        activity: "BeachRelaxation",
        image: "/images/activities/BeachRelaxation.jpg",
      },
      {
        activity: "Hiking",
        image: "/images/activities/Hiking5.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Dholl Puri",
        image: "/images/cuisines/DhollPuri.jpg",
      },
      {
        cuisine: "Octopus Curry",
        image: "/images/cuisines/OctopusCurry.jpg",
      },
      {
        cuisine: "Gateau Piment",
        image: "/images/cuisines/GateauPiment.jpg",
      },
      {
        cuisine: "Alouda",
        image: "/images/cuisines/Alouda.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotel",
        image: "/images/hotels/Ramayanahotel.jpg",
        info: "Indulge in opulence at the Ramayana Hotel, offering lavish accommodations, world-class amenities, and unparalleled hospitality. Immerse yourself in luxury and comfort in the heart of Ayodhya.",
      },
      {
        accommodationType: "Mid-range Hotel",
        image: "/images/hotels/saryuhotel.jpg",
        info: "The Sarayu Hotel provides comfortable rooms and excellent hospitality, conveniently located near the Ram Janmabhoomi Temple.",
      },
      {
        accommodationType: "Budget Guest House",
        image: "/images/hotels/ganpatiGuestHouse.jpg",
        info: "Ganpati Guest House offers budget-friendly accommodations near Hanuman Garhi Temple, providing a homely atmosphere for travelers.",
      },
      {
        accommodationType: "Heritage Homestay",
        image: "/images/hotels/heritagehomestay.jpg",
        info: "Experience traditional hospitality at a heritage homestay, where guests can immerse themselves in the culture and history of Ayodhya.",
      },
      {
        accommodationType: "Dharamshala",
        image: "/images/hotels/shriramdharamshala.jpg",
        info: "Shri Ram Bhawan Dharamshala, managed by Shri Ram Janmabhoomi Teerth Kshetra Trust, offers affordable lodging options for pilgrims visiting Ayodhya.",
      },
    ],
    transportation: [
      `<h4>Road Transport</h4><p>Ayodhya is well-connected by road. It has a network of national and state highways connecting it to major cities and towns in Uttar Pradesh and other parts of India. Buses, taxis, and auto-rickshaws are commonly used for local transportation within the city.</p>`,
      `<h4>Rail Transport:</h4><p>The nearest major railway station is Ayodhya Junction (Ayodhya Cantt), which is located about 10 kilometers away from the city center. It is served by trains connecting Ayodhya to various cities across India.</p>`,
      `<h4>Air Transport:</h4><p>The Prime Minister of India, Shri Narendra Modi, inaugurated the newly built Ayodhya Airport, which has been named Maharishi Valmiki International Airport.
    The decision to name the airport after Maharishi Valmiki, the sage who authored the Hindu epic Ramayana, reflects the cultural and spiritual significance of Ayodhya.
    The airport's inauguration marks a significant milestone in connecting Ayodhya to the rest of India and the world.
    In the first phase of development, the airport can handle 10 lakh (1 million) passengers annually. After the second phase, it is expected to cater to 60 lakh (6 million) commuters annually.
    Phase 1 of the airport's construction cost more than Rs 1450 crore.
    The terminal building spans an area of 6500 sqm and is equipped with features to serve passengers comfortably.
    The facade of the terminal building reflects the temple architecture of the upcoming Shri Ram Mandir of Ayodhya.
    The interiors of the terminal building are adorned with local art, paintings, and murals depicting the life of Lord Ram.
    The airport incorporates various sustainability features such as insulated roofing, LED lighting, rainwater harvesting, landscaping with fountains, water treatment plants, sewage treatment plants, and a solar power plant, aiming for a GRIHA - 5 star rating.
    The airport is expected to enhance connectivity in the region, leading to increased tourism, business activities, and employment opportunities.
    This development is likely to have a significant positive impact on Ayodhya and its surrounding areas, boosting economic growth and cultural exchange.</p>`,
      `<h4>Waterways:</h4><p>While there are no major waterways directly serving Ayodhya, the city is situated on the banks of the Sarayu River. However, water transport is not a primary mode of transportation within the city.</p>`,
      `<h4>Intercity Smart Bus</h4><p>INTERCITY SMART BUS (LUXURY)
    Address: AYODHYA STATION ROAD, opp. SHRI RAM HOSPITAL, JALWA, Ayodhya, Uttar Pradesh 224123
    Phone: 094506 40210<p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Certainly! Ayodhya is one of the oldest and most revered cities in India, with a rich history, mythology, and significance deeply embedded in Hindu culture. Here's a description of its history, mythology, and significance:</p>
      <h4>History:</h4>
      <p>Ayodhya is believed to have been founded by Manu, the progenitor of humanity in Hindu mythology. It served as the capital of the ancient Kosala Kingdom.
      Over the centuries, Ayodhya flourished as a center of culture, trade, and religion. It witnessed the rule of various dynasties, including the Ikshvaku dynasty, to which Lord Rama belonged.
      The city has been a focal point of Hindu-Muslim relations in India due to the controversial Babri Masjid-Ram Janmabhoomi dispute. The dispute revolved around a mosque built by the Mughal Emperor Babur in the 16th century, believed to have been constructed over the birthplace of Lord Rama. The dispute was resolved in 2019 with a Supreme Court verdict allowing for the construction of a Hindu temple at the site.</p>
      <h4>Mythology:</h4>
      <p>Ayodhya is famously known as the birthplace of Lord Rama, the seventh avatar of the Hindu god Vishnu, as per Hindu mythology. Rama is revered as a model king (Maryada Purushottam) and embodiment of dharma (righteousness).
      The epic Ramayana, attributed to the sage Valmiki, narrates the life and adventures of Lord Rama, including his birth, exile, rescue of his wife Sita from the demon king Ravana, and return to Ayodhya to reclaim his throne.
      Ayodhya is also associated with other mythological figures such as King Dasharatha (Rama's father), Sita (Rama's wife), Lakshmana (Rama's brother), Bharata, and Shatrughna (Rama's half-brothers).</p>
      <h4>Significance:</h4>
      <p>Ayodhya holds immense religious significance for Hindus worldwide. It is considered one of the seven sacred cities (Sapta Puri) in Hinduism.
      Pilgrims visit Ayodhya to pay homage to Lord Rama and seek blessings at various temples and sacred sites associated with his life and the Ramayana.
      The city attracts millions of devotees during festivals like Ram Navami, Diwali, and Vivah Panchami, which commemorate events from the life of Lord Rama.
      Ayodhya serves as a symbol of Hindu heritage and cultural identity. Its history and mythology continue to inspire devotion, literature, art, and cultural practices in India and beyond.</p>
      `,
    },
    languages: `<p>Ayodhya, being located in the northern Indian state of Uttar Pradesh, is a diverse city with people speaking various languages. Here are the native languages and languages commonly spoken in Ayodhya:</p>
    <ul>
    <li><h5>Hindi:</h5> As the official language of India, Hindi is widely spoken and understood by the majority of the population in Ayodhya. It serves as the lingua franca for communication across different linguistic communities.</li>
    <li><h5>Awadhi:</h5> Awadhi is a vernacular language spoken primarily in the Awadh region of Uttar Pradesh, including Ayodhya. It holds cultural significance and is used in literature, folk songs, and everyday conversations among the local populace.</li>
    <li><h5>Bhojpuri:</h5> Bhojpuri is another regional language spoken in Ayodhya, especially by migrants and settlers from Bihar and eastern Uttar Pradesh. It is known for its vibrant folk culture, music, and cinema.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Ayodhya, particularly among the Muslim community. It has historical significance and is used in literature, poetry, and religious discourse.</li>
    <li><h5>English:</h5> With the spread of education and globalization, English serves as a secondary language in Ayodhya, especially in educational institutions, government offices, and among the urban population.</li>
    </ul>
    <p>These languages reflect the linguistic diversity and cultural heritage of Ayodhya, with Hindi and Awadhi being the predominant languages of everyday communication, while other languages are spoken by specific communities or groups within the city.</p>
    `,
    culture: {
      culture:
        "Ayodhya's cultural essence captivates visitors with its profound spiritual heritage, vibrant traditions, and timeless allure. Steeped in mythology and history, Ayodhya resonates with the echoes of ancient tales and religious fervor. From the resplendent temples adorned with intricate architecture to the rhythmic beats of classical music and dance, Ayodhya offers a rich tapestry of experiences. Its culinary delights tantalize the taste buds, while serene ghats along the Sarayu River provide tranquil sanctuaries for introspection. Ayodhya's bustling markets and cultural centers beckon exploration, promising glimpses into its literary and artistic legacy. Embracing Ayodhya's cultural ethos unveils a transformative journey, where every step reveals the city's timeless charm and spiritual essence.",
      image: "/images/culture/ayodhya.jpg",
    },
    travelTips: `<h4>Plan Your Visit Around Festivals:</h4><p>Ayodhya is known for its vibrant festivals, such as Ram Navami and Diwali. Consider planning your visit during these times to experience the city's cultural celebrations and festivities firsthand.</p>
      <h4>Respect photograph Restrictions:</h4><p>Some temples and religious sites in Ayodhya may have restrictions on photography or videography. Always ask for permission before taking photos and adhere to any guidelines provided by local authorities or religious leaders.</p>
      <h4>Explore on Foot:</h4><p>Many of Ayodhya's attractions, including temples and ghats, are located in close proximity to each other. Consider exploring the city on foot to soak in its atmosphere and discover hidden gems along the way.</p>
      <h4>Try Local Cuisines:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave Ayodhya as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Ram Leela",
        desc: "Rama Leela is a dramatic reenactment of episodes from the Ramayana, depicting the life and adventures of Lord Rama.",
        image: "/images/events/AyodhyaRamLeela.jpg",
      },
      {
        event: "Diwali",
        desc: "Diwali, the festival of lights, holds special significance in Ayodhya as it marks the return of Lord Rama to the city after his 14-year exile.",
        image: "/images/events/Diwali.jpg",
      },
      {
        event: "Ram Navami",
        desc: " Celebrated with great enthusiasm, Ram Navami commemorates the birth of Lord Rama, the seventh avatar of Lord Vishnu.",
        image: "/images/events/RamNavami.jpg",
      },
      {
        event: "Vivah Panchami",
        desc: "Vivah Panchami commemorates the divine wedding of Lord Rama and Goddess Sita.",
        image: "/images/events/VivahPanchmi.jpg",
      },
      {
        event: "Hanuman Jayanti",
        desc: "Hanuman Jayanti celebrates the birth of Lord Hanuman, a devotee of Lord Rama and a central character in the Ramayana.",
        image: "/images/events/HanumanJayanti.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Mauritius is a paradise on earth with stunning beaches and friendly locals. Highly recommend!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Had an incredible time exploring Mauritius' natural wonders and experiencing the vibrant culture.",
      },
    ],
  },
  {
    place: ["उदयपुर", "Udaipur"],
    description: `<h2>Agra: Tropical Paradise</h2>
        <p>Discover Mauritius, where azure waters meet pristine beaches and vibrant culture. Dive into crystal-clear seas teeming with marine life, or relax on powdery white sands fringed by swaying palms. Immerse yourself in the island's rich heritage through colorful markets, lively Sega music, and diverse cuisine. Explore lush rainforests, zip-line across dramatic landscapes, or tee off on world-class golf courses. Uncover colonial-era architecture in Port Louis, then unwind in luxury resorts offering pampering spas and romantic dining. Mauritius: a captivating blend of relaxation, adventure, and cultural charm awaits.</p>`,
    image: "/images/Udaipur.jpg",
    exploreLink: "/explore/Udaipur",
    activities: [
      {
        activity: "Snorkeling",
        image: "/images/activities/Snorkeling.jpg",
      },
      {
        activity: "Diving",
        image: "/images/activities/Diving.jpg",
      },
      {
        activity: "BeachRelaxation",
        image: "/images/activities/BeachRelaxation.jpg",
      },
      {
        activity: "Hiking",
        image: "/images/activities/Hiking5.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Dholl Puri",
        image: "/images/cuisines/DhollPuri.jpg",
      },
      {
        cuisine: "Octopus Curry",
        image: "/images/cuisines/OctopusCurry.jpg",
      },
      {
        cuisine: "Gateau Piment",
        image: "/images/cuisines/GateauPiment.jpg",
      },
      {
        cuisine: "Alouda",
        image: "/images/cuisines/Alouda.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotel",
        image: "/images/hotels/Ramayanahotel.jpg",
        info: "Indulge in opulence at the Ramayana Hotel, offering lavish accommodations, world-class amenities, and unparalleled hospitality. Immerse yourself in luxury and comfort in the heart of Ayodhya.",
      },
      {
        accommodationType: "Mid-range Hotel",
        image: "/images/hotels/saryuhotel.jpg",
        info: "The Sarayu Hotel provides comfortable rooms and excellent hospitality, conveniently located near the Ram Janmabhoomi Temple.",
      },
      {
        accommodationType: "Budget Guest House",
        image: "/images/hotels/ganpatiGuestHouse.jpg",
        info: "Ganpati Guest House offers budget-friendly accommodations near Hanuman Garhi Temple, providing a homely atmosphere for travelers.",
      },
      {
        accommodationType: "Heritage Homestay",
        image: "/images/hotels/heritagehomestay.jpg",
        info: "Experience traditional hospitality at a heritage homestay, where guests can immerse themselves in the culture and history of Ayodhya.",
      },
      {
        accommodationType: "Dharamshala",
        image: "/images/hotels/shriramdharamshala.jpg",
        info: "Shri Ram Bhawan Dharamshala, managed by Shri Ram Janmabhoomi Teerth Kshetra Trust, offers affordable lodging options for pilgrims visiting Ayodhya.",
      },
    ],
    transportation: [
      `<h4>Road Transport</h4><p>Ayodhya is well-connected by road. It has a network of national and state highways connecting it to major cities and towns in Uttar Pradesh and other parts of India. Buses, taxis, and auto-rickshaws are commonly used for local transportation within the city.</p>`,
      `<h4>Rail Transport:</h4><p>The nearest major railway station is Ayodhya Junction (Ayodhya Cantt), which is located about 10 kilometers away from the city center. It is served by trains connecting Ayodhya to various cities across India.</p>`,
      `<h4>Air Transport:</h4><p>The Prime Minister of India, Shri Narendra Modi, inaugurated the newly built Ayodhya Airport, which has been named Maharishi Valmiki International Airport.
    The decision to name the airport after Maharishi Valmiki, the sage who authored the Hindu epic Ramayana, reflects the cultural and spiritual significance of Ayodhya.
    The airport's inauguration marks a significant milestone in connecting Ayodhya to the rest of India and the world.
    In the first phase of development, the airport can handle 10 lakh (1 million) passengers annually. After the second phase, it is expected to cater to 60 lakh (6 million) commuters annually.
    Phase 1 of the airport's construction cost more than Rs 1450 crore.
    The terminal building spans an area of 6500 sqm and is equipped with features to serve passengers comfortably.
    The facade of the terminal building reflects the temple architecture of the upcoming Shri Ram Mandir of Ayodhya.
    The interiors of the terminal building are adorned with local art, paintings, and murals depicting the life of Lord Ram.
    The airport incorporates various sustainability features such as insulated roofing, LED lighting, rainwater harvesting, landscaping with fountains, water treatment plants, sewage treatment plants, and a solar power plant, aiming for a GRIHA - 5 star rating.
    The airport is expected to enhance connectivity in the region, leading to increased tourism, business activities, and employment opportunities.
    This development is likely to have a significant positive impact on Ayodhya and its surrounding areas, boosting economic growth and cultural exchange.</p>`,
      `<h4>Waterways:</h4><p>While there are no major waterways directly serving Ayodhya, the city is situated on the banks of the Sarayu River. However, water transport is not a primary mode of transportation within the city.</p>`,
      `<h4>Intercity Smart Bus</h4><p>INTERCITY SMART BUS (LUXURY)
    Address: AYODHYA STATION ROAD, opp. SHRI RAM HOSPITAL, JALWA, Ayodhya, Uttar Pradesh 224123
    Phone: 094506 40210<p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Certainly! Ayodhya is one of the oldest and most revered cities in India, with a rich history, mythology, and significance deeply embedded in Hindu culture. Here's a description of its history, mythology, and significance:</p>
      <h4>History:</h4>
      <p>Ayodhya is believed to have been founded by Manu, the progenitor of humanity in Hindu mythology. It served as the capital of the ancient Kosala Kingdom.
      Over the centuries, Ayodhya flourished as a center of culture, trade, and religion. It witnessed the rule of various dynasties, including the Ikshvaku dynasty, to which Lord Rama belonged.
      The city has been a focal point of Hindu-Muslim relations in India due to the controversial Babri Masjid-Ram Janmabhoomi dispute. The dispute revolved around a mosque built by the Mughal Emperor Babur in the 16th century, believed to have been constructed over the birthplace of Lord Rama. The dispute was resolved in 2019 with a Supreme Court verdict allowing for the construction of a Hindu temple at the site.</p>
      <h4>Mythology:</h4>
      <p>Ayodhya is famously known as the birthplace of Lord Rama, the seventh avatar of the Hindu god Vishnu, as per Hindu mythology. Rama is revered as a model king (Maryada Purushottam) and embodiment of dharma (righteousness).
      The epic Ramayana, attributed to the sage Valmiki, narrates the life and adventures of Lord Rama, including his birth, exile, rescue of his wife Sita from the demon king Ravana, and return to Ayodhya to reclaim his throne.
      Ayodhya is also associated with other mythological figures such as King Dasharatha (Rama's father), Sita (Rama's wife), Lakshmana (Rama's brother), Bharata, and Shatrughna (Rama's half-brothers).</p>
      <h4>Significance:</h4>
      <p>Ayodhya holds immense religious significance for Hindus worldwide. It is considered one of the seven sacred cities (Sapta Puri) in Hinduism.
      Pilgrims visit Ayodhya to pay homage to Lord Rama and seek blessings at various temples and sacred sites associated with his life and the Ramayana.
      The city attracts millions of devotees during festivals like Ram Navami, Diwali, and Vivah Panchami, which commemorate events from the life of Lord Rama.
      Ayodhya serves as a symbol of Hindu heritage and cultural identity. Its history and mythology continue to inspire devotion, literature, art, and cultural practices in India and beyond.</p>
      `,
    },
    languages: `<p>Ayodhya, being located in the northern Indian state of Uttar Pradesh, is a diverse city with people speaking various languages. Here are the native languages and languages commonly spoken in Ayodhya:</p>
    <ul>
    <li><h5>Hindi:</h5> As the official language of India, Hindi is widely spoken and understood by the majority of the population in Ayodhya. It serves as the lingua franca for communication across different linguistic communities.</li>
    <li><h5>Awadhi:</h5> Awadhi is a vernacular language spoken primarily in the Awadh region of Uttar Pradesh, including Ayodhya. It holds cultural significance and is used in literature, folk songs, and everyday conversations among the local populace.</li>
    <li><h5>Bhojpuri:</h5> Bhojpuri is another regional language spoken in Ayodhya, especially by migrants and settlers from Bihar and eastern Uttar Pradesh. It is known for its vibrant folk culture, music, and cinema.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Ayodhya, particularly among the Muslim community. It has historical significance and is used in literature, poetry, and religious discourse.</li>
    <li><h5>English:</h5> With the spread of education and globalization, English serves as a secondary language in Ayodhya, especially in educational institutions, government offices, and among the urban population.</li>
    </ul>
    <p>These languages reflect the linguistic diversity and cultural heritage of Ayodhya, with Hindi and Awadhi being the predominant languages of everyday communication, while other languages are spoken by specific communities or groups within the city.</p>
    `,
    culture: {
      culture:
        "Ayodhya's cultural essence captivates visitors with its profound spiritual heritage, vibrant traditions, and timeless allure. Steeped in mythology and history, Ayodhya resonates with the echoes of ancient tales and religious fervor. From the resplendent temples adorned with intricate architecture to the rhythmic beats of classical music and dance, Ayodhya offers a rich tapestry of experiences. Its culinary delights tantalize the taste buds, while serene ghats along the Sarayu River provide tranquil sanctuaries for introspection. Ayodhya's bustling markets and cultural centers beckon exploration, promising glimpses into its literary and artistic legacy. Embracing Ayodhya's cultural ethos unveils a transformative journey, where every step reveals the city's timeless charm and spiritual essence.",
      image: "/images/culture/ayodhya.jpg",
    },
    travelTips: `<h4>Plan Your Visit Around Festivals:</h4><p>Ayodhya is known for its vibrant festivals, such as Ram Navami and Diwali. Consider planning your visit during these times to experience the city's cultural celebrations and festivities firsthand.</p>
      <h4>Respect photograph Restrictions:</h4><p>Some temples and religious sites in Ayodhya may have restrictions on photography or videography. Always ask for permission before taking photos and adhere to any guidelines provided by local authorities or religious leaders.</p>
      <h4>Explore on Foot:</h4><p>Many of Ayodhya's attractions, including temples and ghats, are located in close proximity to each other. Consider exploring the city on foot to soak in its atmosphere and discover hidden gems along the way.</p>
      <h4>Try Local Cuisines:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave Ayodhya as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Ram Leela",
        desc: "Rama Leela is a dramatic reenactment of episodes from the Ramayana, depicting the life and adventures of Lord Rama.",
        image: "/images/events/AyodhyaRamLeela.jpg",
      },
      {
        event: "Diwali",
        desc: "Diwali, the festival of lights, holds special significance in Ayodhya as it marks the return of Lord Rama to the city after his 14-year exile.",
        image: "/images/events/Diwali.jpg",
      },
      {
        event: "Ram Navami",
        desc: " Celebrated with great enthusiasm, Ram Navami commemorates the birth of Lord Rama, the seventh avatar of Lord Vishnu.",
        image: "/images/events/RamNavami.jpg",
      },
      {
        event: "Vivah Panchami",
        desc: "Vivah Panchami commemorates the divine wedding of Lord Rama and Goddess Sita.",
        image: "/images/events/VivahPanchmi.jpg",
      },
      {
        event: "Hanuman Jayanti",
        desc: "Hanuman Jayanti celebrates the birth of Lord Hanuman, a devotee of Lord Rama and a central character in the Ramayana.",
        image: "/images/events/HanumanJayanti.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Mauritius is a paradise on earth with stunning beaches and friendly locals. Highly recommend!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Had an incredible time exploring Mauritius' natural wonders and experiencing the vibrant culture.",
      },
    ],
  },
  {
    place: ["दिल्ली", "Delhi"],
    description: `<h2>Mauritius: Tropical Paradise</h2>
        <p>Discover Mauritius, where azure waters meet pristine beaches and vibrant culture. Dive into crystal-clear seas teeming with marine life, or relax on powdery white sands fringed by swaying palms. Immerse yourself in the island's rich heritage through colorful markets, lively Sega music, and diverse cuisine. Explore lush rainforests, zip-line across dramatic landscapes, or tee off on world-class golf courses. Uncover colonial-era architecture in Port Louis, then unwind in luxury resorts offering pampering spas and romantic dining. Mauritius: a captivating blend of relaxation, adventure, and cultural charm awaits.</p>`,
    image: "/images/Agra.jpg",
    exploreLink: "/explore/Agra",
    activities: [
      {
        activity: "Snorkeling",
        image: "/images/activities/Snorkeling.jpg",
      },
      {
        activity: "Diving",
        image: "/images/activities/Diving.jpg",
      },
      {
        activity: "BeachRelaxation",
        image: "/images/activities/BeachRelaxation.jpg",
      },
      {
        activity: "Hiking",
        image: "/images/activities/Hiking5.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Dholl Puri",
        image: "/images/cuisines/DhollPuri.jpg",
      },
      {
        cuisine: "Octopus Curry",
        image: "/images/cuisines/OctopusCurry.jpg",
      },
      {
        cuisine: "Gateau Piment",
        image: "/images/cuisines/GateauPiment.jpg",
      },
      {
        cuisine: "Alouda",
        image: "/images/cuisines/Alouda.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotel",
        image: "/images/hotels/Ramayanahotel.jpg",
        info: "Indulge in opulence at the Ramayana Hotel, offering lavish accommodations, world-class amenities, and unparalleled hospitality. Immerse yourself in luxury and comfort in the heart of Ayodhya.",
      },
      {
        accommodationType: "Mid-range Hotel",
        image: "/images/hotels/saryuhotel.jpg",
        info: "The Sarayu Hotel provides comfortable rooms and excellent hospitality, conveniently located near the Ram Janmabhoomi Temple.",
      },
      {
        accommodationType: "Budget Guest House",
        image: "/images/hotels/ganpatiGuestHouse.jpg",
        info: "Ganpati Guest House offers budget-friendly accommodations near Hanuman Garhi Temple, providing a homely atmosphere for travelers.",
      },
      {
        accommodationType: "Heritage Homestay",
        image: "/images/hotels/heritagehomestay.jpg",
        info: "Experience traditional hospitality at a heritage homestay, where guests can immerse themselves in the culture and history of Ayodhya.",
      },
      {
        accommodationType: "Dharamshala",
        image: "/images/hotels/shriramdharamshala.jpg",
        info: "Shri Ram Bhawan Dharamshala, managed by Shri Ram Janmabhoomi Teerth Kshetra Trust, offers affordable lodging options for pilgrims visiting Ayodhya.",
      },
    ],
    transportation: [
      `<h4>Road Transport</h4><p>Ayodhya is well-connected by road. It has a network of national and state highways connecting it to major cities and towns in Uttar Pradesh and other parts of India. Buses, taxis, and auto-rickshaws are commonly used for local transportation within the city.</p>`,
      `<h4>Rail Transport:</h4><p>The nearest major railway station is Ayodhya Junction (Ayodhya Cantt), which is located about 10 kilometers away from the city center. It is served by trains connecting Ayodhya to various cities across India.</p>`,
      `<h4>Air Transport:</h4><p>The Prime Minister of India, Shri Narendra Modi, inaugurated the newly built Ayodhya Airport, which has been named Maharishi Valmiki International Airport.
    The decision to name the airport after Maharishi Valmiki, the sage who authored the Hindu epic Ramayana, reflects the cultural and spiritual significance of Ayodhya.
    The airport's inauguration marks a significant milestone in connecting Ayodhya to the rest of India and the world.
    In the first phase of development, the airport can handle 10 lakh (1 million) passengers annually. After the second phase, it is expected to cater to 60 lakh (6 million) commuters annually.
    Phase 1 of the airport's construction cost more than Rs 1450 crore.
    The terminal building spans an area of 6500 sqm and is equipped with features to serve passengers comfortably.
    The facade of the terminal building reflects the temple architecture of the upcoming Shri Ram Mandir of Ayodhya.
    The interiors of the terminal building are adorned with local art, paintings, and murals depicting the life of Lord Ram.
    The airport incorporates various sustainability features such as insulated roofing, LED lighting, rainwater harvesting, landscaping with fountains, water treatment plants, sewage treatment plants, and a solar power plant, aiming for a GRIHA - 5 star rating.
    The airport is expected to enhance connectivity in the region, leading to increased tourism, business activities, and employment opportunities.
    This development is likely to have a significant positive impact on Ayodhya and its surrounding areas, boosting economic growth and cultural exchange.</p>`,
      `<h4>Waterways:</h4><p>While there are no major waterways directly serving Ayodhya, the city is situated on the banks of the Sarayu River. However, water transport is not a primary mode of transportation within the city.</p>`,
      `<h4>Intercity Smart Bus</h4><p>INTERCITY SMART BUS (LUXURY)
    Address: AYODHYA STATION ROAD, opp. SHRI RAM HOSPITAL, JALWA, Ayodhya, Uttar Pradesh 224123
    Phone: 094506 40210<p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Certainly! Ayodhya is one of the oldest and most revered cities in India, with a rich history, mythology, and significance deeply embedded in Hindu culture. Here's a description of its history, mythology, and significance:</p>
      <h4>History:</h4>
      <p>Ayodhya is believed to have been founded by Manu, the progenitor of humanity in Hindu mythology. It served as the capital of the ancient Kosala Kingdom.
      Over the centuries, Ayodhya flourished as a center of culture, trade, and religion. It witnessed the rule of various dynasties, including the Ikshvaku dynasty, to which Lord Rama belonged.
      The city has been a focal point of Hindu-Muslim relations in India due to the controversial Babri Masjid-Ram Janmabhoomi dispute. The dispute revolved around a mosque built by the Mughal Emperor Babur in the 16th century, believed to have been constructed over the birthplace of Lord Rama. The dispute was resolved in 2019 with a Supreme Court verdict allowing for the construction of a Hindu temple at the site.</p>
      <h4>Mythology:</h4>
      <p>Ayodhya is famously known as the birthplace of Lord Rama, the seventh avatar of the Hindu god Vishnu, as per Hindu mythology. Rama is revered as a model king (Maryada Purushottam) and embodiment of dharma (righteousness).
      The epic Ramayana, attributed to the sage Valmiki, narrates the life and adventures of Lord Rama, including his birth, exile, rescue of his wife Sita from the demon king Ravana, and return to Ayodhya to reclaim his throne.
      Ayodhya is also associated with other mythological figures such as King Dasharatha (Rama's father), Sita (Rama's wife), Lakshmana (Rama's brother), Bharata, and Shatrughna (Rama's half-brothers).</p>
      <h4>Significance:</h4>
      <p>Ayodhya holds immense religious significance for Hindus worldwide. It is considered one of the seven sacred cities (Sapta Puri) in Hinduism.
      Pilgrims visit Ayodhya to pay homage to Lord Rama and seek blessings at various temples and sacred sites associated with his life and the Ramayana.
      The city attracts millions of devotees during festivals like Ram Navami, Diwali, and Vivah Panchami, which commemorate events from the life of Lord Rama.
      Ayodhya serves as a symbol of Hindu heritage and cultural identity. Its history and mythology continue to inspire devotion, literature, art, and cultural practices in India and beyond.</p>
      `,
    },
    languages: `<p>Ayodhya, being located in the northern Indian state of Uttar Pradesh, is a diverse city with people speaking various languages. Here are the native languages and languages commonly spoken in Ayodhya:</p>
    <ul>
    <li><h5>Hindi:</h5> As the official language of India, Hindi is widely spoken and understood by the majority of the population in Ayodhya. It serves as the lingua franca for communication across different linguistic communities.</li>
    <li><h5>Awadhi:</h5> Awadhi is a vernacular language spoken primarily in the Awadh region of Uttar Pradesh, including Ayodhya. It holds cultural significance and is used in literature, folk songs, and everyday conversations among the local populace.</li>
    <li><h5>Bhojpuri:</h5> Bhojpuri is another regional language spoken in Ayodhya, especially by migrants and settlers from Bihar and eastern Uttar Pradesh. It is known for its vibrant folk culture, music, and cinema.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Ayodhya, particularly among the Muslim community. It has historical significance and is used in literature, poetry, and religious discourse.</li>
    <li><h5>English:</h5> With the spread of education and globalization, English serves as a secondary language in Ayodhya, especially in educational institutions, government offices, and among the urban population.</li>
    </ul>
    <p>These languages reflect the linguistic diversity and cultural heritage of Ayodhya, with Hindi and Awadhi being the predominant languages of everyday communication, while other languages are spoken by specific communities or groups within the city.</p>
    `,
    culture: {
      culture:
        "Ayodhya's cultural essence captivates visitors with its profound spiritual heritage, vibrant traditions, and timeless allure. Steeped in mythology and history, Ayodhya resonates with the echoes of ancient tales and religious fervor. From the resplendent temples adorned with intricate architecture to the rhythmic beats of classical music and dance, Ayodhya offers a rich tapestry of experiences. Its culinary delights tantalize the taste buds, while serene ghats along the Sarayu River provide tranquil sanctuaries for introspection. Ayodhya's bustling markets and cultural centers beckon exploration, promising glimpses into its literary and artistic legacy. Embracing Ayodhya's cultural ethos unveils a transformative journey, where every step reveals the city's timeless charm and spiritual essence.",
      image: "/images/culture/ayodhya.jpg",
    },
    travelTips: `<h4>Plan Your Visit Around Festivals:</h4><p>Ayodhya is known for its vibrant festivals, such as Ram Navami and Diwali. Consider planning your visit during these times to experience the city's cultural celebrations and festivities firsthand.</p>
      <h4>Respect photograph Restrictions:</h4><p>Some temples and religious sites in Ayodhya may have restrictions on photography or videography. Always ask for permission before taking photos and adhere to any guidelines provided by local authorities or religious leaders.</p>
      <h4>Explore on Foot:</h4><p>Many of Ayodhya's attractions, including temples and ghats, are located in close proximity to each other. Consider exploring the city on foot to soak in its atmosphere and discover hidden gems along the way.</p>
      <h4>Try Local Cuisines:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave Ayodhya as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Ram Leela",
        desc: "Rama Leela is a dramatic reenactment of episodes from the Ramayana, depicting the life and adventures of Lord Rama.",
        image: "/images/events/AyodhyaRamLeela.jpg",
      },
      {
        event: "Diwali",
        desc: "Diwali, the festival of lights, holds special significance in Ayodhya as it marks the return of Lord Rama to the city after his 14-year exile.",
        image: "/images/events/Diwali.jpg",
      },
      {
        event: "Ram Navami",
        desc: " Celebrated with great enthusiasm, Ram Navami commemorates the birth of Lord Rama, the seventh avatar of Lord Vishnu.",
        image: "/images/events/RamNavami.jpg",
      },
      {
        event: "Vivah Panchami",
        desc: "Vivah Panchami commemorates the divine wedding of Lord Rama and Goddess Sita.",
        image: "/images/events/VivahPanchmi.jpg",
      },
      {
        event: "Hanuman Jayanti",
        desc: "Hanuman Jayanti celebrates the birth of Lord Hanuman, a devotee of Lord Rama and a central character in the Ramayana.",
        image: "/images/events/HanumanJayanti.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Mauritius is a paradise on earth with stunning beaches and friendly locals. Highly recommend!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Had an incredible time exploring Mauritius' natural wonders and experiencing the vibrant culture.",
      },
    ],
  },
  {
    place: ["अमृतसर", "Amritsar"],
    description: `<h2>Mauritius: Tropical Paradise</h2>
        <p>Discover Mauritius, where azure waters meet pristine beaches and vibrant culture. Dive into crystal-clear seas teeming with marine life, or relax on powdery white sands fringed by swaying palms. Immerse yourself in the island's rich heritage through colorful markets, lively Sega music, and diverse cuisine. Explore lush rainforests, zip-line across dramatic landscapes, or tee off on world-class golf courses. Uncover colonial-era architecture in Port Louis, then unwind in luxury resorts offering pampering spas and romantic dining. Mauritius: a captivating blend of relaxation, adventure, and cultural charm awaits.</p>`,
    image: "/images/Amritsar.jpg",
    exploreLink: "/explore/Amritsar",
    activities: [
      {
        activity: "Snorkeling",
        image: "/images/activities/Snorkeling.jpg",
      },
      {
        activity: "Diving",
        image: "/images/activities/Diving.jpg",
      },
      {
        activity: "BeachRelaxation",
        image: "/images/activities/BeachRelaxation.jpg",
      },
      {
        activity: "Hiking",
        image: "/images/activities/Hiking5.jpg",
      },
    ],
    cuisines: [
      {
        cuisine: "Dholl Puri",
        image: "/images/cuisines/DhollPuri.jpg",
      },
      {
        cuisine: "Octopus Curry",
        image: "/images/cuisines/OctopusCurry.jpg",
      },
      {
        cuisine: "Gateau Piment",
        image: "/images/cuisines/GateauPiment.jpg",
      },
      {
        cuisine: "Alouda",
        image: "/images/cuisines/Alouda.jpg",
      },
    ],
    accommodations: [
      {
        accommodationType: "Luxury Hotel",
        image: "/images/hotels/Ramayanahotel.jpg",
        info: "Indulge in opulence at the Ramayana Hotel, offering lavish accommodations, world-class amenities, and unparalleled hospitality. Immerse yourself in luxury and comfort in the heart of Ayodhya.",
      },
      {
        accommodationType: "Mid-range Hotel",
        image: "/images/hotels/saryuhotel.jpg",
        info: "The Sarayu Hotel provides comfortable rooms and excellent hospitality, conveniently located near the Ram Janmabhoomi Temple.",
      },
      {
        accommodationType: "Budget Guest House",
        image: "/images/hotels/ganpatiGuestHouse.jpg",
        info: "Ganpati Guest House offers budget-friendly accommodations near Hanuman Garhi Temple, providing a homely atmosphere for travelers.",
      },
      {
        accommodationType: "Heritage Homestay",
        image: "/images/hotels/heritagehomestay.jpg",
        info: "Experience traditional hospitality at a heritage homestay, where guests can immerse themselves in the culture and history of Ayodhya.",
      },
      {
        accommodationType: "Dharamshala",
        image: "/images/hotels/shriramdharamshala.jpg",
        info: "Shri Ram Bhawan Dharamshala, managed by Shri Ram Janmabhoomi Teerth Kshetra Trust, offers affordable lodging options for pilgrims visiting Ayodhya.",
      },
    ],
    transportation: [
      `<h4>Road Transport</h4><p>Ayodhya is well-connected by road. It has a network of national and state highways connecting it to major cities and towns in Uttar Pradesh and other parts of India. Buses, taxis, and auto-rickshaws are commonly used for local transportation within the city.</p>`,
      `<h4>Rail Transport:</h4><p>The nearest major railway station is Ayodhya Junction (Ayodhya Cantt), which is located about 10 kilometers away from the city center. It is served by trains connecting Ayodhya to various cities across India.</p>`,
      `<h4>Air Transport:</h4><p>The Prime Minister of India, Shri Narendra Modi, inaugurated the newly built Ayodhya Airport, which has been named Maharishi Valmiki International Airport.
    The decision to name the airport after Maharishi Valmiki, the sage who authored the Hindu epic Ramayana, reflects the cultural and spiritual significance of Ayodhya.
    The airport's inauguration marks a significant milestone in connecting Ayodhya to the rest of India and the world.
    In the first phase of development, the airport can handle 10 lakh (1 million) passengers annually. After the second phase, it is expected to cater to 60 lakh (6 million) commuters annually.
    Phase 1 of the airport's construction cost more than Rs 1450 crore.
    The terminal building spans an area of 6500 sqm and is equipped with features to serve passengers comfortably.
    The facade of the terminal building reflects the temple architecture of the upcoming Shri Ram Mandir of Ayodhya.
    The interiors of the terminal building are adorned with local art, paintings, and murals depicting the life of Lord Ram.
    The airport incorporates various sustainability features such as insulated roofing, LED lighting, rainwater harvesting, landscaping with fountains, water treatment plants, sewage treatment plants, and a solar power plant, aiming for a GRIHA - 5 star rating.
    The airport is expected to enhance connectivity in the region, leading to increased tourism, business activities, and employment opportunities.
    This development is likely to have a significant positive impact on Ayodhya and its surrounding areas, boosting economic growth and cultural exchange.</p>`,
      `<h4>Waterways:</h4><p>While there are no major waterways directly serving Ayodhya, the city is situated on the banks of the Sarayu River. However, water transport is not a primary mode of transportation within the city.</p>`,
      `<h4>Intercity Smart Bus</h4><p>INTERCITY SMART BUS (LUXURY)
    Address: AYODHYA STATION ROAD, opp. SHRI RAM HOSPITAL, JALWA, Ayodhya, Uttar Pradesh 224123
    Phone: 094506 40210<p>`,
    ],
    History_Mythology_and_Cultural_Significance: {
      description: `<p>Certainly! Ayodhya is one of the oldest and most revered cities in India, with a rich history, mythology, and significance deeply embedded in Hindu culture. Here's a description of its history, mythology, and significance:</p>
      <h4>History:</h4>
      <p>Ayodhya is believed to have been founded by Manu, the progenitor of humanity in Hindu mythology. It served as the capital of the ancient Kosala Kingdom.
      Over the centuries, Ayodhya flourished as a center of culture, trade, and religion. It witnessed the rule of various dynasties, including the Ikshvaku dynasty, to which Lord Rama belonged.
      The city has been a focal point of Hindu-Muslim relations in India due to the controversial Babri Masjid-Ram Janmabhoomi dispute. The dispute revolved around a mosque built by the Mughal Emperor Babur in the 16th century, believed to have been constructed over the birthplace of Lord Rama. The dispute was resolved in 2019 with a Supreme Court verdict allowing for the construction of a Hindu temple at the site.</p>
      <h4>Mythology:</h4>
      <p>Ayodhya is famously known as the birthplace of Lord Rama, the seventh avatar of the Hindu god Vishnu, as per Hindu mythology. Rama is revered as a model king (Maryada Purushottam) and embodiment of dharma (righteousness).
      The epic Ramayana, attributed to the sage Valmiki, narrates the life and adventures of Lord Rama, including his birth, exile, rescue of his wife Sita from the demon king Ravana, and return to Ayodhya to reclaim his throne.
      Ayodhya is also associated with other mythological figures such as King Dasharatha (Rama's father), Sita (Rama's wife), Lakshmana (Rama's brother), Bharata, and Shatrughna (Rama's half-brothers).</p>
      <h4>Significance:</h4>
      <p>Ayodhya holds immense religious significance for Hindus worldwide. It is considered one of the seven sacred cities (Sapta Puri) in Hinduism.
      Pilgrims visit Ayodhya to pay homage to Lord Rama and seek blessings at various temples and sacred sites associated with his life and the Ramayana.
      The city attracts millions of devotees during festivals like Ram Navami, Diwali, and Vivah Panchami, which commemorate events from the life of Lord Rama.
      Ayodhya serves as a symbol of Hindu heritage and cultural identity. Its history and mythology continue to inspire devotion, literature, art, and cultural practices in India and beyond.</p>
      `,
    },
    languages: `<p>Ayodhya, being located in the northern Indian state of Uttar Pradesh, is a diverse city with people speaking various languages. Here are the native languages and languages commonly spoken in Ayodhya:</p>
    <ul>
    <li><h5>Hindi:</h5> As the official language of India, Hindi is widely spoken and understood by the majority of the population in Ayodhya. It serves as the lingua franca for communication across different linguistic communities.</li>
    <li><h5>Awadhi:</h5> Awadhi is a vernacular language spoken primarily in the Awadh region of Uttar Pradesh, including Ayodhya. It holds cultural significance and is used in literature, folk songs, and everyday conversations among the local populace.</li>
    <li><h5>Bhojpuri:</h5> Bhojpuri is another regional language spoken in Ayodhya, especially by migrants and settlers from Bihar and eastern Uttar Pradesh. It is known for its vibrant folk culture, music, and cinema.</li>
    <li><h5>Urdu:</h5> Urdu, a language with Persian and Arabic influences, is spoken by a minority of people in Ayodhya, particularly among the Muslim community. It has historical significance and is used in literature, poetry, and religious discourse.</li>
    <li><h5>English:</h5> With the spread of education and globalization, English serves as a secondary language in Ayodhya, especially in educational institutions, government offices, and among the urban population.</li>
    </ul>
    <p>These languages reflect the linguistic diversity and cultural heritage of Ayodhya, with Hindi and Awadhi being the predominant languages of everyday communication, while other languages are spoken by specific communities or groups within the city.</p>
    `,
    culture: {
      culture:
        "Ayodhya's cultural essence captivates visitors with its profound spiritual heritage, vibrant traditions, and timeless allure. Steeped in mythology and history, Ayodhya resonates with the echoes of ancient tales and religious fervor. From the resplendent temples adorned with intricate architecture to the rhythmic beats of classical music and dance, Ayodhya offers a rich tapestry of experiences. Its culinary delights tantalize the taste buds, while serene ghats along the Sarayu River provide tranquil sanctuaries for introspection. Ayodhya's bustling markets and cultural centers beckon exploration, promising glimpses into its literary and artistic legacy. Embracing Ayodhya's cultural ethos unveils a transformative journey, where every step reveals the city's timeless charm and spiritual essence.",
      image: "/images/culture/ayodhya.jpg",
    },
    travelTips: `<h4>Plan Your Visit Around Festivals:</h4><p>Ayodhya is known for its vibrant festivals, such as Ram Navami and Diwali. Consider planning your visit during these times to experience the city's cultural celebrations and festivities firsthand.</p>
      <h4>Respect photograph Restrictions:</h4><p>Some temples and religious sites in Ayodhya may have restrictions on photography or videography. Always ask for permission before taking photos and adhere to any guidelines provided by local authorities or religious leaders.</p>
      <h4>Explore on Foot:</h4><p>Many of Ayodhya's attractions, including temples and ghats, are located in close proximity to each other. Consider exploring the city on foot to soak in its atmosphere and discover hidden gems along the way.</p>
      <h4>Try Local Cuisines:</h4><p>Don't miss the opportunity to savor Ayodhya's delicious cuisine, which is influenced by Awadhi and North Indian flavors. From street food stalls to traditional eateries, there are plenty of options to tantalize your taste buds.</p>
      <h4>Leave no Trace:</h4><p>Lastly, remember to be a responsible traveler and leave no trace of your visit. Dispose of waste properly, respect the environment, and leave Ayodhya as beautiful as you found it for future generations to enjoy.</p>
      `,
    events: [
      {
        event: "Ram Leela",
        desc: "Rama Leela is a dramatic reenactment of episodes from the Ramayana, depicting the life and adventures of Lord Rama.",
        image: "/images/events/AyodhyaRamLeela.jpg",
      },
      {
        event: "Diwali",
        desc: "Diwali, the festival of lights, holds special significance in Ayodhya as it marks the return of Lord Rama to the city after his 14-year exile.",
        image: "/images/events/Diwali.jpg",
      },
      {
        event: "Ram Navami",
        desc: " Celebrated with great enthusiasm, Ram Navami commemorates the birth of Lord Rama, the seventh avatar of Lord Vishnu.",
        image: "/images/events/RamNavami.jpg",
      },
      {
        event: "Vivah Panchami",
        desc: "Vivah Panchami commemorates the divine wedding of Lord Rama and Goddess Sita.",
        image: "/images/events/VivahPanchmi.jpg",
      },
      {
        event: "Hanuman Jayanti",
        desc: "Hanuman Jayanti celebrates the birth of Lord Hanuman, a devotee of Lord Rama and a central character in the Ramayana.",
        image: "/images/events/HanumanJayanti.jpg",
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Mauritius is a paradise on earth with stunning beaches and friendly locals. Highly recommend!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Had an incredible time exploring Mauritius' natural wonders and experiencing the vibrant culture.",
      },
    ],
  },
];

ExploreDestination.insertMany(exploreDefaultDestinations)
  .then((insertedData) => {
    ExploreDestination.deleteMany({});
    console.log("Default explore destinations inserted Successfully.");
    // console.log(insertedData);
    ExploreDestination.deleteMany({});
  })
  .catch((err) => {
    console.log("Error inserting default explore destinations:", err);
  });

module.exports = exploreDefaultDestinations;

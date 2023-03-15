import { v4 as uuidv4 } from 'uuid';

export const events = [
   {
      id: uuidv4(),
      name: 'Green Earth Cleanup',
      date: randomDateWithinMonth(),
      location: 'Toronto, Canada',
      description:
         'Join us for a day of cleaning up our planet! We will be focusing on local parks and green spaces to remove litter and waste. All materials will be provided, and volunteers will receive a free t-shirt and lunch. Help us make a difference and protect our beautiful planet!',
      organizer: 'Green Earth Society',
      image: `https://source.unsplash.com/random/?green,earth`,
   },
   {
      id: uuidv4(),
      name: 'Community Garden Planting',
      date: randomDateWithinMonth(),
      location: 'Vancouver, Canada',
      description:
         'Come help us plant a new community garden! We will be planting a variety of fruits and vegetables that will be shared with local food banks and shelters. All ages and skill levels are welcome. Gloves and tools will be provided.',
      organizer: 'Green Thumb Society',
      image: 'https://source.unsplash.com/random/?garden',
   },
   {
      id: uuidv4(),
      name: 'Youth Mentorship Program',
      date: randomDateWithinMonth(),
      location: 'Montreal, Canada',
      description:
         'Be a mentor to a local youth and make a difference in their life! We are looking for volunteers to spend time with young people and offer guidance and support. No experience necessary. Training and ongoing support will be provided.',
      organizer: 'Big Brothers Big Sisters',
      image: 'https://source.unsplash.com/random/?youth,mentorship',
   },
   {
      id: uuidv4(),
      name: 'River Cleanup',
      date: randomDateWithinMonth(),
      location: 'Calgary, Canada',
      description:
         'Join us for a day of cleaning up the Bow River! We will be removing garbage and debris from the river and its banks. All ages and abilities are welcome. Please bring gloves and wear appropriate footwear.',
      organizer: 'Friends of the Bow River Society',
      image: 'https://source.unsplash.com/random/?river',
   },
   {
      id: uuidv4(),
      name: 'Habitat Restoration',
      date: '2023-08-05',
      location: 'Halifax, Canada',
      description:
         'Help restore a local wetland! We will be planting native species and removing invasive plants. This is a great opportunity to learn about wetland ecology and conservation. Snacks and water will be provided.',
      organizer: 'Halifax Nature Conservancy',
      image: 'https://source.unsplash.com/random/?habitat',
   },
   {
      id: uuidv4(),
      name: "Seniors' Social",
      date: randomDateWithinMonth(),
      location: 'Ottawa, Canada',
      description:
         'Join us for a fun afternoon with seniors! We will be playing games, doing crafts, and enjoying light refreshments. This is a great opportunity to connect with local seniors and learn from their experiences.',
      organizer: 'Ottawa Senior Centre',
      image: 'https://source.unsplash.com/random/?seniors',
   },
   {
      id: uuidv4(),
      name: 'Food Bank Drive',
      date: randomDateWithinMonth(),
      location: 'Winnipeg, Canada',
      description:
         'Help us stock the shelves at the local food bank! We will be collecting non-perishable food items from local businesses and residents. Volunteers will be needed to sort and pack the donations. All volunteers will receive a free t-shirt.',
      organizer: 'Winnipeg Food Bank',
      image: 'https://source.unsplash.com/random/?food',
   },
   {
      id: uuidv4(),
      name: 'Schoolyard Tree Planting',
      date: randomDateWithinMonth(),
      location: 'Edmonton, Canada',
      description:
         'Help beautify a local schoolyard! We will be planting trees and shrubs to create a more natural environment for students to learn and play. Tools and equipment will be provided. All ages and skill levels are welcome!',
      organizer: 'Edmonton School Board',
      image: 'https://source.unsplash.com/random/?schoolyard',
   },
   {
      id: uuidv4(),
      name: 'Animal Shelter Fundraiser',
      date: randomDateWithinMonth(),
      location: 'Victoria, Canada',
      description:
         'Join us for a fundraiser to support a local animal shelter! We will be selling baked goods, crafts, and other items to raise funds for the shelter. Volunteers are needed to help with setup, sales, and cleanup.',
      organizer: 'Victoria Animal Rescue Society',
      image: 'https://source.unsplash.com/random/?animal',
   },
   {
      id: uuidv4(),
      name: 'Winter Coat Drive',
      date: randomDateWithinMonth(),
      location: 'Regina, Canada',
      description:
         'Help us collect winter coats for those in need! We will be collecting new and gently used coats from local residents and businesses. Volunteers will be needed to sort and distribute the coats. All volunteers will receive a free coffee or hot chocolate.',
      organizer: 'Regina Community Outreach',
      image: 'https://source.unsplash.com/random/?winter',
   },
   {
      id: uuidv4(),
      name: 'Homeless Shelter Volunteer',
      date: randomDateWithinMonth(),
      location: 'Toronto, Canada',
      description:
         "Volunteer at a local homeless shelter and make a difference in someone's life! We need volunteers to help with meal preparation, cleaning, and other tasks. Training and ongoing support will be provided.",
      organizer: 'Toronto Homeless Shelter',
      image: 'https://source.unsplash.com/random/?homeless',
   },
   {
      id: uuidv4(),
      name: 'Toy Drive',
      date: randomDateWithinMonth(),
      location: 'Vancouver, Canada',
      description:
         'Help us collect toys for local children in need! We will be collecting new and gently used toys from local residents and businesses. Volunteers will be needed to sort and distribute the toys. All volunteers will receive a free pizza lunch.',
      organizer: "Vancouver Children's Charity",
      image: 'https://source.unsplash.com/random/?toy,drive',
   },
   {
      id: uuidv4(),
      name: 'Holiday Party for Seniors',
      date: '2023-12-20',
      location: 'Calgary, Canada',
      description:
         "Join us for a holiday party with local seniors! We will be serving refreshments, singing carols, and enjoying each other's company. Volunteers are needed to help with setup, serving, and cleanup.",
      organizer: 'Calgary Senior Centre',
      image: 'https://source.unsplash.com/random/?holiday,senior',
   },
   {
      id: uuidv4(),
      name: 'Community Cleanup',
      date: randomDateWithinMonth(),
      location: 'Halifax, Canada',
      description:
         'Join us for a day of cleaning up our community! We will be focusing on local streets and public spaces to remove litter and waste. All materials will be provided, and volunteers will receive a free t-shirt and lunch. Help us make a difference and keep our community clean!',
      organizer: 'Halifax Community Council',
      image: 'https://source.unsplash.com/random/?community',
   },
   {
      id: uuidv4(),
      name: 'Food Bank Fundraiser',
      date: randomDateWithinMonth(),
      location: 'Saskatoon, Canada',
      description:
         'Help us raise funds for a local food bank! We will be holding a bake sale and silent auction to raise money for those in need. Volunteers are needed to help with setup, sales, and cleanup.',
      organizer: 'Saskatoon Food Bank',
      image: 'https://source.unsplash.com/random/?foods',
   },
   {
      id: uuidv4(),
      name: 'Beach Cleanup',
      date: randomDateWithinMonth(),
      location: 'Victoria, Canada',
      description:
         'Join us for a day of cleaning up our local beach! We will be focusing on removing litter and debris to help protect the environment and wildlife. All materials will be provided, and volunteers will receive a free t-shirt and lunch.',
      organizer: 'Victoria Environmental Society',
      image: 'https://source.unsplash.com/random/?beach',
   },
   {
      id: uuidv4(),
      name: 'Community Garden Planting',
      date: randomDateWithinMonth(),
      location: 'Montreal, Canada',
      description:
         'Help us plant a community garden! We will be planting a variety of fruits and vegetables for the community to enjoy. Volunteers are needed to help with planting, weeding, and other tasks. No experience necessary, all ages welcome!',
      organizer: 'Montreal Community Garden Society',
      image: 'https://source.unsplash.com/random/?garden',
   },
];

function randomDateWithinMonth() {
   const now = new Date().getTime();
   const nextMonth = now + 30 * 24 * 60 * 60 * 1000;
   const randomTime = now + Math.floor(Math.random() * (nextMonth - now));
   const randomDate = new Date(randomTime);
   return randomDate.toISOString().slice(0, 10).replace(/-/g, '/');
}

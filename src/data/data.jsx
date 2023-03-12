import { v4 as uuidv4 } from 'uuid';

// FAKE DATA

export const data = [
   {
      id: uuidv4(),
      name: 'events',
      list: [
         {
            id: uuidv4(),
            name: 'Clean Toronto Together',
            img: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZvbHVudGVlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
         },
         {
            id: uuidv4(),
            name: 'Volunteering at 55+ Seminar and Fair',
            img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
         },
         {
            id: uuidv4(),
            name: `Help Feed the Homeless - Making Sandwiches for Ve'ahavta`,
            img: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
         },
         {
            id: uuidv4(),
            name: 'Food Champions',
            img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
         },
         {
            id: uuidv4(),
            name: 'Literacy for East Toronto',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1fKUu_oHoxGX11CYK7vTDvv3cJGl8EDOxQFzFStGcoSm_kH9xPs0exYTGiRX&s=10',
         },
      ],
   },
   {
      id: uuidv4(),
      name: 'organizations',
      list: [
         {
            id: uuidv4(),
            name: 'Charity Village',
            logo: 'https://charityvillage.com/wp-content/uploads/2019/11/Charity-Village-Logo-300-1.png',
         },
         {
            id: uuidv4(),
            name: 'Canadian Red Cross',
            logo: 'https://mma.prnewswire.com/media/1153698/Canadian_Red_Cross_Canadian_Red_Cross_adapts_to_meet_community_n.jpg',
         },
         {
            id: uuidv4(),
            name: 'Katimavik',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Katimavik_Logo.svg/1200px-Katimavik_Logo.svg.png',
         },
         {
            id: uuidv4(),
            name: 'Cuso International',
            logo: 'https://cusointernational.org/wp-content/uploads/imagine-canada-en-colour.svg',
         },
         {
            id: uuidv4(),
            name: 'The Salvation Army',
            logo: 'https://soscs.org/wp-content/uploads/the-salvation-army-logo.png',
         },
      ],
   },
   { id: uuidv4(), name: 'news', list: [] },
];

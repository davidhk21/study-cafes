import { v4 as uuidv4 } from 'uuid';
import type { Cafe } from '../_types/cafes';

import photo1 from '../../../public/stumptown-coffee-roasters-header.jpg';
import photo2 from '../../../public/ace-hotel-lobby-vertical.jpg';
import photo3 from '../../../public/ace-lobby-hotel.jpg';

import PowerIcon from '@mui/icons-material/Power';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RestroomIcon from '@mui/icons-material/Wc';
import WifiIcon from '@mui/icons-material/Wifi';
import OutdoorSeatingIcon from '@mui/icons-material/Deck';
import PetFriendlyIcon from '@mui/icons-material/Pets';
import PastriesIcon from '@mui/icons-material/BakeryDining';
import ParkingIcon from '@mui/icons-material/LocalParking';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LightingIcon from '@mui/icons-material/LightMode';

export const cafes: Record<string, Cafe[]> = {
  "new-york": [
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
        pastries: {
          icon: PastriesIcon,
          text: "Pastries"
        },
        parking: {
          icon: ParkingIcon,
          text: "Parking"
        },
        milkAlternatives: {
          icon: CoffeeIcon,
          text: "Milk Alternatives"
        },
        naturalLighting: {
          icon: LightingIcon,
          text: "Natural Lighting"
        }
        // show all amenities and highlight
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
  ],
  "los-angeles": [
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    }
  ],
  "san-jose": [
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    },
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      alt: "stumptown-coffee-roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: [photo1, photo2, photo3],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      mapsQuery: "Stumptown Coffee Roasters P2W6+7P New York",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
        tbd: 50,
      },
      amenities: {
        outlets: {
          icon: PowerIcon,
          text: "Outlets"
        },
        food: {
          icon: RestaurantIcon,
          text: "Food"
        },
        bathroom: {
          icon: RestroomIcon,
          text: "Restrooms"
        },
        wifi: {
          icon: WifiIcon,
          text: "Wifi"
        },
        outdoorSeating: {
          icon: OutdoorSeatingIcon,
          text: "Outdoor Seating"
        },
        petFriendly: {
          icon: PetFriendlyIcon,
          text: "Pet Friendly"
        },
      },
      hours: {
        monday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        tuesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        wednesday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        thursday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        friday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        saturday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
        sunday: {
          open: '7:00 AM',
          close: '6:00 PM'
        },
      }
    }
  ]
}
interface Ratings {
  taste: number;
  seatAvailability: number;
  quietness: number;
}

interface Amenities {
  outlets: boolean;
  food: boolean;
}

export interface Cafes {
  id: string;
  name: string;
  description: string;
  photos: string[];
  url: string;
  address: string;
  ratings: Ratings;
  amenities: Amenities;
}
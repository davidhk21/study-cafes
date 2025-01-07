import { StaticImageData } from "next/image";

interface Ratings {
  taste: number;
  seatAvailability: number;
  quietness: number;
}

interface Amenities {
  outlets: boolean;
  food: boolean;
}

export interface Cafe {
  id: string;
  name: string;
  alt: string;
  description: string;
  photos: StaticImageData[];
  url: string;
  address: string;
  ratings: Ratings;
  amenities: Amenities;
}
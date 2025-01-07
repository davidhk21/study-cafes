import { StaticImageData } from "next/image";

export interface Ratings {
  taste: number;
  seatAvailability: number;
  quietness: number;
  tbd: number;
}

export interface Amenities {
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
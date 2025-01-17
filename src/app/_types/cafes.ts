import { StaticImageData } from "next/image";

export interface Ratings {
  taste: number;
  seatAvailability: number;
  quietness: number;
  tbd: number;
}

interface Amenitiy {
  icon: React.ElementType;
  text: string;
}

export interface Amenities {
  outlets?: Amenitiy;
  food?: Amenitiy;
  bathroom?: Amenitiy;
  wifi?: Amenitiy;
  outdoorSeating?: Amenitiy;
  petFriendly?: Amenitiy;
  pastries?: Amenitiy;
  parking?: Amenitiy;
  milkAlternatives?: Amenitiy;
  naturalLighting?: Amenitiy;
}

export interface Cafe {
  id: string;
  name: string;
  alt: string;
  description: string;
  photos: StaticImageData[];
  url: string;
  address: string;
  mapsQuery: string;
  ratings: Ratings;
  amenities: Amenities;
}
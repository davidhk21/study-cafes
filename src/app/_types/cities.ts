import { StaticImageData } from "next/image";

export type CityName = "new-york" | "los-angeles" | "san-jose";

interface City {
  name: string;
  photo: StaticImageData;
  alt: string;
}

export type CityMap = Record<CityName, City>
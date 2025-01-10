'use client';
import type { Ratings } from "../_types/cafes"; 
import { Rating } from "@mui/material";

const categoryMap: Record<string, string> = {
  taste: 'Taste',
  seatAvailability: 'Seat Availability',
  quietness: "Quietness",
  tbd: "TBD"
}

const Ratings = ({ ratings }: {
  ratings: Ratings
}) => {
  return (
    <div className="flex-1 gap-5 flex flex-col items-center py-5">
      {Object.entries(ratings).map(([category, score], idx) => (
        <div key={`${category}-${score}-${idx}`} className="flex flex-col gap-5 justify-center items-center px-12 py-5 w-[80%] font-libre text-2xl shadow-lg">
          {categoryMap[category]}
          <Rating name="half-rating-read" size="large" max={10} defaultValue={score / 10} precision={0.5} readOnly />
        </div>
      ))}
    </div>
  )
}

export default Ratings;
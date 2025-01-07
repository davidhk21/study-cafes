import type { Ratings } from "../_types/cafes"; 
import { Rating, Card } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

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
    <div className="border border-red-500 flex-1 gap-5 flex flex-col items-center">
      {Object.entries(ratings).map(([category, score]) => (
        <Card key={uuidv4()} variant="outlined" className="flex flex-col gap-5 justify-center items-center px-12 py-5 w-[80%] font-libre text-2xl shadow-lg">
          {categoryMap[category]}
          <Rating name="half-rating-read" size="large" max={10} defaultValue={score / 10} precision={0.5} readOnly />
        </Card>
      ))}
    </div>
  )
}

export default Ratings;
import { CityName } from "@/app/_types/cities";
import { cafes } from "@/app/_data/cafes";
import Image from "next/image";
import type { Cafe } from "@/app/_types/cafes";
import Ratings from "@/app/_components/Ratings";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

const CityPage = async ({ params }: {
  params: Promise<{ city: CityName, cafe: string}>
}) => {
  const { city, cafe} = await params;

  const selectedCafe = cafes[city].find((c) => cafe === c.alt) as Cafe;

  return (
    <div className="max-w-[90%] md:max-w-[75%] m-auto">
      <div className="flex justify-center items-center">
        <Image
          src={selectedCafe.photos[0]}
          alt={selectedCafe.name}
          className="md:w-[80vw] h-[30vh] md:h-[50vh]"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5 py-5 md:py-20">
        <h1 className="flex-1 font-libre text-4xl flex justify-center items-center">{selectedCafe.name}</h1>
        <p className="flex-1 font-sans text-xl flex justify-center items-center">{selectedCafe.description}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Ratings ratings={selectedCafe.ratings} />
        <div className="flex-1">
          <Image 
            src={selectedCafe.photos[1]}
            alt={selectedCafe.name}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-[50vh] h-fit">
        <div className="flex-1 flex items-center justify-center">
          <iframe
            className="min-w-[250px] min-h-[300px] w-full h-full p-5 md:p-10"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${selectedCafe.mapsQuery}`}>
          </iframe>
        </div>
        <div className="flex-1 flex justify-center items-center py-5 md:py-16">
          <div className="bg-white flex items-center flex-col shadow-2xl">
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <h3 className="font-libre text-2xl">
                Amenities
              </h3>
            </Typography>
            <div className="grid grid-cols-2 gap-x-10">
              {Object.entries(selectedCafe.amenities).map(([amenity, val]) => (
              <List key={`${selectedCafe.id}-${amenity}`}>
                <ListItem className="whitespace-nowrap">
                  <val.icon />
                  <ListItemText
                    primary={val.text}
                    className="pl-1"
                  />
                </ListItem>
              </List>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image 
          src={selectedCafe.photos[2]}
          alt={selectedCafe.name}
          className="aspect-video pb-5"
        />
      </div>
    </div>
  )
}

export default CityPage;
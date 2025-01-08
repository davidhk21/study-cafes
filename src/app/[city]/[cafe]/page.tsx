import { CityName } from "@/app/_types/cities";
import { cafes } from "@/app/_data/cafes";
import Image from "next/image";
import type { Cafe } from "@/app/_types/cafes";
import Ratings from "@/app/_components/Ratings";

const CityPage = async ({ params }: {
  params: Promise<{ city: CityName, cafe: string}>
}) => {
  const { city, cafe} = await params;

  const selectedCafe = cafes[city].find((c) => cafe === c.alt) as Cafe;

  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src={selectedCafe.photos[0]}
          alt={selectedCafe.name}
          className="w-[80vw] h-[50vh] p-12"
        />
      </div>
      <div className="flex flex-row p-20">
        <h1 className="flex-1 font-libre text-4xl flex justify-center items-center">{selectedCafe.name}</h1>
        <p className="flex-1 font-sans text-xl flex justify-center items-center">{selectedCafe.description}</p>
      </div>
      <div className="border border-black flex flex-row justify-center items-center px-12">
        <Ratings ratings={selectedCafe.ratings} />
        <div className="flex-1 border border-black">
          <Image 
            src={selectedCafe.photos[1]}
            alt={selectedCafe.name}
            // className="aspect-auto"
          />
        </div>
      </div>
      <div className="flex flex-row border border-black h-[50vh]">
        <div className="flex-1 border border-black flex items-center justify-center">
        <iframe
          className="min-w-[200px] min-h-[200px] w-[75%] h-[75%]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${selectedCafe.mapsQuery}`}>
        </iframe>
        </div>
        <div className="flex-1 border border-black">
          Amenities Section
        </div>
      </div>
      <Image 
        src={selectedCafe.photos[2]}
        alt={selectedCafe.name}
        className="w-[80vw] aspect-video block m-auto"
      />
    </div>
  )
}

export default CityPage;
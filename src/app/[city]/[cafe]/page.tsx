import { CityName } from "@/app/_types/cities";
import { cafes } from "@/app/_data/cafes";
import Image from "next/image";
import type { Cafe } from "@/app/_types/cafes";
import Ratings from "@/app/_components/Ratings";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import FadeInWhenVisible from "@/app/_components/FadeInWhenVisible";


const CityPage = async ({ params }: {
  params: Promise<{ city: CityName, cafe: string}>
}) => {
  const { city, cafe} = await params;

  const selectedCafe = cafes[city].find((c) => cafe === c.alt) as Cafe;

  return (
    <div className="">
      <div className="relative bg-black w-full h-[100vh]">
        <Image
          src={selectedCafe.photos[0]}
          alt={selectedCafe.name}
          className="object-fill opacity-60 pointer-events-none w-full h-full animate-fade-in"
        />
        <div className="absolute top-1/2 left-[6%] text-white font-libre text-4xl">
          <h1>{selectedCafe.name}</h1>
        </div>
      </div>

      <FadeInWhenVisible style="md:h-[100vh] flex flex-col md:flex-row items-center justify-center md:w-[80%] mx-auto">
        <Image 
          src={selectedCafe.photos[1]}
          alt={selectedCafe.name}
          className="flex-1 max-w-[90%] md:max-w-[600px] md:max-h-[800px] w-auto h-auto shadow-2xl m-12"
        />
        <div className="flex-1 flex flex-col justify-center w-[90%] md:w-[50%] md:ml-12 max-w-[500px]">
          <p className="mb-6 font-sans leading-loose text-lg">Stumptown Coffee Roasters was one of the first cafes I visited upon moving to New York, and it has remained a favorite ever since. I often stop by after church or when I need a convenient workspace in the Midtown area. <br /><br /> The seating area is situated in a spacious lobby connecting the Ace Hotel and the cafe itself. With its diverse seating options and a lively atmosphere of people working or chatting over coffee, the space offers a pleasant balance of background noise without being overwhelmingly loud—perfect for those who appreciate a dynamic yet comfortable environment.</p>
        </div>
      </FadeInWhenVisible>

      <div className="flex flex-col md:flex-row justify-center items-center md:w-[80%] mx-auto">
        <div className="flex-1 flex flex-col justify-center w-[90%] md:w-[50%] md:ml-12 max-w-[500px]">
        <h2 className="mb-6 font-libre tracking-widest text-content-title">RATINGS</h2>
          <p className="mb-6 font-sans leading-loose text-lg">Some really long description that has a bunch of words about the cafe and my personal opinion about thte cafe or what I like about the cafe that makes it worth adding to the list of cafes that I recommend</p>
          <p className="font-sans leading-loose text-lg">Some really long description that has a bunch of words about the cafe and my personal opinion about thte cafe or what I like about the cafe that makes it worth adding to the list of cafes that I recommend</p>
        </div>
        <Ratings ratings={selectedCafe.ratings} />
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center md:w-[80%] mx-auto md:my-20">
        <div className="flex justify-center items-center mb-6 md:mb-0">
          <div className="bg-white flex items-center flex-col shadow-2xl">
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <h3 className="font-libre text-2xl">
                Amenities
              </h3>
            </Typography>
            <div className="grid grid-cols-2">
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
        <div className="flex flex-col justify-center w-[90%] md:w-[80%] md:ml-20 max-w-[500px]">
        <h2 className="mb-6 font-libre tracking-widest text-content-title">AMENITIES</h2>
          <p className="mb-6 font-sans leading-loose text-lg">Some really long description that has a bunch of words about the cafe and my personal opinion about thte cafe or what I like about the cafe that makes it worth adding to the list of cafes that I recommend</p>
          <p className="font-sans leading-loose text-lg">Some really long description that has a bunch of words about the cafe and my personal opinion about thte cafe or what I like about the cafe that makes it worth adding to the list of cafes that I recommend</p>
        </div>
      </div>

      <FadeInWhenVisible style="w-full md:h-[100vh] flex flex-col justify-center items-center mt-6 md:mt-0">
        <Image 
          src={selectedCafe.photos[2]}
          alt={selectedCafe.name}
          className="aspect-video max-w-[90%] md:max-w-[1000px] max-h-[700px] w-auto h-auto mb-12 shadow-2xl"
        />
        <div className="flex flex-col items-center w-[90%] md:w-[50%] max-w-[700px] md:ml-12">
          <h2 className="mb-6 font-libre tracking-widest text-content-title">AESTHETIC</h2>
          <p className="font-sans leading-loose text-lg">Some really long description that has a bunch of words about the cafe and my personal opinion about thte cafe or what I like about the cafe that makes it worth adding to the list of cafes that I recommend</p>
        </div>
      </FadeInWhenVisible>

      <div className="flex flex-col md:flex-row justify-center items-center w-[90%] md:w-[80%] mx-auto py-12">
        <iframe
          className="min-w-[250px] min-h-[300px] max-w-[700px] w-full h-full mb-6 md:mb-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${selectedCafe.mapsQuery}`}>
        </iframe>
        <div className="flex flex-col justify-center md:w-[50%] max-w-[500px] md:ml-12">
        <h2 className="mb-6 font-libre tracking-widest text-content-title">LOCATION</h2>
          <p className="mb-6 font-sans leading-loose text-lg">Some really long description that has a bunch of words about the cafe and my personal opinion about thte cafe or what I like about the cafe that makes it worth adding to the list of cafes that I recommend</p>
          <p className="font-sans leading-loose text-lg">Some really long description that has a bunch of words about the cafe and my personal opinion about thte cafe or what I like about the cafe that makes it worth adding to the list of cafes that I recommend</p>
        </div>
      </div>
    </div>
  )
}

// const CityPage = async ({ params }: {
//   params: Promise<{ city: CityName, cafe: string}>
// }) => {
//   const { city, cafe} = await params;

//   const selectedCafe = cafes[city].find((c) => cafe === c.alt) as Cafe;

//   return (
//     <div className="max-w-[90%] md:max-w-[75%] m-auto">
//       <div className="flex justify-center items-center">
//         <Image
//           src={selectedCafe.photos[0]}
//           alt={selectedCafe.name}
//           className="md:w-[80vw] h-[30vh] md:h-[50vh]"
//         />
//       </div>
//       <div className="flex flex-col md:flex-row gap-5 py-5 md:py-20">
//         <h1 className="flex-1 font-libre text-4xl flex justify-center items-center">{selectedCafe.name}</h1>
//         <p className="flex-1 font-sans text-xl flex justify-center items-center">{selectedCafe.description}</p>
//       </div>
//       <div className="flex flex-col md:flex-row justify-center items-center">
//         <Ratings ratings={selectedCafe.ratings} />
//         <div className="flex-1">
//           <Image 
//             src={selectedCafe.photos[1]}
//             alt={selectedCafe.name}
//           />
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row h-[50vh] h-fit">
//         <div className="flex-1 flex items-center justify-center">
//           <iframe
//             className="min-w-[250px] min-h-[300px] w-full h-full p-5 md:p-10"
//             loading="lazy"
//             allowFullScreen
//             referrerPolicy="no-referrer-when-downgrade"
//             src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${selectedCafe.mapsQuery}`}>
//           </iframe>
//         </div>
//         <div className="flex-1 flex justify-center items-center py-5 md:py-16">
//           <div className="bg-white flex items-center flex-col shadow-2xl">
//             <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//               <h3 className="font-libre text-2xl">
//                 Amenities
//               </h3>
//             </Typography>
//             <div className="grid grid-cols-2">
//               {Object.entries(selectedCafe.amenities).map(([amenity, val]) => (
//               <List key={`${selectedCafe.id}-${amenity}`}>
//                 <ListItem className="whitespace-nowrap">
//                   <val.icon />
//                   <ListItemText
//                     primary={val.text}
//                     className="pl-1"
//                   />
//                 </ListItem>
//               </List>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Image 
//           src={selectedCafe.photos[2]}
//           alt={selectedCafe.name}
//           className="aspect-video pb-5"
//         />
//       </div>
//     </div>
//   )
// }

export default CityPage;
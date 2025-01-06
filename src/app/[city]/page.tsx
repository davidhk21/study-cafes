import Image from 'next/image';
import Link from 'next/link';
import dumbo from '../../../public/dumbo.jpg';
import santaMonica from '../../../public/santa-monica.png';
import sanJoseBackground from '../../../public/san-jose-neighborhood.jpg';
import { cafes } from '@/app/_data/cafes';
import { CityMap, CityName } from '@/app/_types/cities';

const cityNameMap: CityMap = {
  "new-york": {
    name: "New York",
    photo: dumbo,
    alt: "Dumbo, Brooklyn"
  },
  "los-angeles": {
    name: "Los Angeles",
    photo: santaMonica,
    alt: "Santa Monica"
  },
  "san-jose": {
    name: "San Jose",
    photo: sanJoseBackground,
    alt: "San Jose Neighborhood"
  },
}

const CityPage = async ({ params }: {
  params: Promise<{ city: CityName}>
}) => {
  const city = (await params).city;
  const { name, photo, alt } = cityNameMap[city];

  return (
    <div>
      <div className='w-full h-1/4 md:h-[40vh] overflow-hidden flex items-center relative text-white text-3xl'>
        <Image 
          src={photo}
          alt={alt}
          className='w-full brightness-50'
        />
        <h1 className='font-libre absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] pointer-events-none'>
          {name}
        </h1>
      </div>
      <div className='flex justify-center items-center flex-col gap-12 p-12'>
        {cafes[city].map((cafe) => (
          <Link key={cafe.id} href={`${city}/${cafe.alt}`} className='w-[75vw] h-[15vh] md:h-[20vh] overflow-hidden flex items-center relative text-white hover:text-black text-3xl duration-500 shadow-2xl cursor-pointer'>
            <Image 
              src={dumbo}
              alt={cafe.name}
              className='w-full hover:opacity-50 duration-500 hover:scale-125'
            />
            <p className="font-libre absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] pointer-events-none">
              {cafe.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CityPage;
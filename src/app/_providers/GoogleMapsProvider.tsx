'use client';
import { APIProvider } from '@vis.gl/react-google-maps';

const GoogleMapsProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY as string} onLoad={() => console.log('Maps API has loaded!')}>
      { children }
    </APIProvider>
  )
}

export default GoogleMapsProvider;
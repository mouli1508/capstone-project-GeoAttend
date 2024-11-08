// components/LocationRequest.tsx
import { useState } from 'react';
import Image from 'next/image';

const LocationRequest = ({ location }: { location: string | null }) => (
  <div className="flex items-center gap-2 p-4 border rounded my-4">
    <Image src="/location-icon.png" alt="Location" width={20} height={20} />
    <div>
      <p className="text-sm text-gray-600">{location ? location : 'Requesting location...'}</p>
    </div>
  </div>
);

export default LocationRequest;

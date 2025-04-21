import React from 'react';
import Image from 'next/image';

interface BobaTileProps {
  drinkName: string;
  imageUrl: string;
  price: number;
  description: string;
}

export default function BobaTile({
  drinkName,
  imageUrl,
  price,
  description,
}: BobaTileProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        width={234}
        height={234}
        className="w-full"
        alt={drinkName}
      />
      <div className="px-3 pb-4 pt-4 bg-orange-100">
        <div className="font-black text-base mb-2 text-center uppercase">
          {drinkName}
        </div>
        <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
          {description}
        </p>
        <p className="text-gray-700 text-base text-center pt-6">{price}</p>
      </div>
    </div>
  );
}

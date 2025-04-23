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
    <article className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-100">
      <Image
        src={imageUrl}
        width={234}
        height={234}
        className="w-full"
        alt={drinkName}
      />
      <div className="p-4 bg-orange-100">
        <div className="font-black text-base mb-2 text-center uppercase min-h-[3rem] flex items-center justify-center">
          {drinkName}
        </div>
        <p className="text-stone-500 text-sm text-center font-light h-20">
          {description}
        </p>
        <p className="text-gray-700 text-base text-center pt-6 font-serif text-bold">
          ${price}
        </p>
      </div>
    </article>
  );
}

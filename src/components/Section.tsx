import React from 'react';
import BobaTile from './BobaTile';
import { DrinkItem } from './BobaTilesContainer';

interface SectionProps {
  sectionName: string;
  drinkItems: DrinkItem[];
}

export default function Section({ sectionName, drinkItems }: SectionProps) {
  return (
    <div>
      <h1 className="font-black text-5xl mb-2 text-center uppercase">
        {sectionName}
      </h1>
      <div className="grid grid-cols-2 gap-6 p-4 md:p-10 md:grid-cols-3 lg:grid-cols-4 lg:max-w-screen-lg lg:mx-auto">
        {drinkItems.map((drink) => (
          <BobaTile
            key={drink.drinkName}
            drinkName={drink.drinkName}
            imageUrl={drink.imageUrl}
            price={drink.price}
            description={drink.description}
          />
        ))}
      </div>
    </div>
  );
}

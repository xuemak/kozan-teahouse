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
      <h1>{sectionName}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-2 gap-6 md:p-10 lg:max-w-screen-lg lg:mx-auto lg:p-20">
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

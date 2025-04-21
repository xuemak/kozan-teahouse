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
      <div className="grid grid-cols-4 gap-6 p-50">
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

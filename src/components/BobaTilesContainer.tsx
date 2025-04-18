import React from 'react';
import BobaTile from './BobaTile';
import bobaMenuJson from '../data/bobaMenu.json';

interface DrinkItem {
  drinkName: string;
  imageUrl: string;
  price: number;
  description: string;
}

interface MenuSection {
  sectionName: string;
  drinkItems: DrinkItem[];
}

interface BobaMenuStructure {
  sections: MenuSection[];
}

const bobaDrinks: BobaMenuStructure = bobaMenuJson as BobaMenuStructure;

export default function BobaTilesContainer() {
  return (
    <div>
      {bobaDrinks.sections.map((section) => (
        <div key={section.sectionName}>
          <h1>{section.sectionName}</h1>
          <div className="grid grid-cols-4 gap-6 p-50">
            {section.drinkItems.map((drink) => (
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
      ))}
    </div>
  );
}

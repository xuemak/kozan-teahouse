import React from 'react';
import BobaTile from './BobaTile';
import bobaMenuData from '../data/bobaMenu.json';

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

interface BobaMenuData {
  sections: MenuSection[];
}

const bobaDrinks: BobaMenuData = bobaMenuData as BobaMenuData;

export default function Tiles() {
  return (
    <div>
      {bobaDrinks.sections.map((section) => (
        <div key={section.sectionName}>
          <h2>{section.sectionName}</h2>
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

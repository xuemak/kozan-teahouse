import React from 'react';
import bobaMenuJson from '../data/bobaMenu.json';
import Section from './Section';

export interface DrinkItem {
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
        <Section
          key={section.sectionName}
          sectionName={section.sectionName}
          drinkItems={section.drinkItems}
        />
      ))}
    </div>
  );
}

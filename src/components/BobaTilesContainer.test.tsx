import React from 'react';
import BobaTilesContainer from './BobaTilesContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import bobaMenuJson from '../data/bobaMenu.json';

jest.mock('../data/bobaMenu.json', () => ({
  sections: [
    {
      sectionName: 'Milk Tea',
      drinkItems: [
        {
          drinkName: 'Brown Sugar Milk Tea',
          imageUrl: '/images/drinks/bs-mt.webp',
          price: 6.25,
          description:
            'Black milk tea made with non-dairy creamer, sweetened and drizzled with caramelized brown sugar.',
        },
        {
          drinkName: 'Classic Milk Tea',
          imageUrl: '/images/drinks/classic-mt.webp',
          price: 6.25,
          description:
            'Plain and simple black milk tea made with non-dairy creamer.',
        },
      ],
    },
    {
      sectionName: 'Shakes',
      drinkItems: [
        {
          drinkName: 'Taro Wave',
          imageUrl: '/images/drinks/taro-wave.webp',
          price: 6.65,
          description:
            'Best-selling taro coconut milkshake served with a light swirl of sweet ube yam.',
        },
      ],
    },
  ],
}));

describe(BobaTilesContainer, () => {
  it('renders something without errors', () => {
    render(<BobaTilesContainer />);
    expect(screen.getByText('Milk Tea')).toBeInTheDocument();
  });
});

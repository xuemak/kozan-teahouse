import BobaTilesContainer from './BobaTilesContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import bobaMenuJson from '../data/bobaMenu.json';

describe(BobaTilesContainer, () => {
  it.each(bobaMenuJson.sections)('renders the %s section', (section) => {
    render(<BobaTilesContainer />);
    expect(
      screen.getByRole('heading', { name: section.sectionName, level: 1 })
    ).toBeInTheDocument();
  });
});

describe(BobaTilesContainer, () => {
  it('renders all BobaTile components', () => {
    render(<BobaTilesContainer />);
    const bobaTiles = screen.getAllByRole('article');
    let totalDrinkItems = 0;
    bobaMenuJson.sections.forEach((section) => {
      totalDrinkItems += section.drinkItems.length;
    });
    expect(bobaTiles).toHaveLength(totalDrinkItems);
  });
});

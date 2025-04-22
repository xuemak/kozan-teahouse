import Section from './Section';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import bobaMenuJson from '../data/bobaMenu.json';

const testSection = bobaMenuJson.sections[0];

describe(Section, () => {
  it('renders the section name', () => {
    render(
      <Section
        sectionName={testSection.sectionName}
        drinkItems={testSection.drinkItems}
      />
    );
    expect(
      screen.getByRole('heading', { name: testSection.sectionName })
    ).toBeInTheDocument();
  });
});

describe(Section, () => {
  it('renders all drinks within a section', () => {
    render(
      <Section
        sectionName={testSection.sectionName}
        drinkItems={testSection.drinkItems}
      />
    );
    expect(screen.getAllByRole('article').length).toBe(
      testSection.drinkItems.length
    );
  });
});

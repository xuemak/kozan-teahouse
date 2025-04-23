import BobaTile from './BobaTile';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockProps = {
  drinkName: 'Brown Sugar Milk Tea',
  imageUrl: '/images/drinks/bs-mt.webp',
  price: 6.25,
  description:
    'Black milk tea made with non-dairy creamer, sweetened and drizzled with caramelized brown sugar.',
};

describe(BobaTile, () => {
  it('renders drink name', () => {
    render(<BobaTile {...mockProps} />);
    expect(screen.getByText(mockProps.drinkName)).toBeInTheDocument();
  });
  it('renders drink image with correct image source and drink name as alt attribute', () => {
    render(<BobaTile {...mockProps} />);
    const drinkImage = screen.getByAltText(mockProps.drinkName);
    expect(drinkImage).toHaveAttribute('src', mockProps.imageUrl);
  });

  it('renders drink price', () => {
    render(<BobaTile {...mockProps} />);
    expect(
      screen.getByText(`$${mockProps.price.toString()}`)
    ).toBeInTheDocument();
  });

  it('renders drink description', () => {
    render(<BobaTile {...mockProps} />);
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
});

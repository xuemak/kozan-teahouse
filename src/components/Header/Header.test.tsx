import Header from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe(Header, () => {
  it('renders Kozan Tea House full logo', () => {
    const { getByAltText } = render(<Header />);
    const logo = getByAltText('Kozan Tea House Full Text Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders Instagram link', () => {
    render(<Header />);
    const instagramLink = screen.getByText('Instagram');
    expect(instagramLink).toBeInTheDocument();
  });

  it('renders E-Gift Card link', () => {
    render(<Header />);
    const giftCardLink = screen.getByText('E-Gift Card');
    expect(giftCardLink).toBeInTheDocument();
  });

  it('renders user icon', () => {
    render(<Header />);
    const userIcon = screen.getByAltText('user icon');
    expect(userIcon).toBeInTheDocument();
  });

  it('renders cart icon', () => {
    render(<Header />);
    const cartIcon = screen.getByAltText('cart icon');
    expect(cartIcon).toBeInTheDocument();
  });
});

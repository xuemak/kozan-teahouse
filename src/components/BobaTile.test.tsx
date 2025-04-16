import BobaTile from "./BobaTile";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const mockProps = {
    drinkName: 'Brown Sugar Milk Tea',
    imageUrl: './public/images/drinks/bs-mt.webp',
    price: 6.25,
    description: 'Black milk tea made with non-dairy creamer, sweetened and drizzled with caramelized brown sugar.'
};

describe(BobaTile, () => {

    it("renders drink image, drink name, drink description, and drink price", () => {
        render(<BobaTile {...mockProps}/>);
        expect(screen.getByText(mockProps.drinkName)).toBeInTheDocument();
        expect(screen.getByText(mockProps.description)).toBeInTheDocument();
        expect(screen.getByText(mockProps.price.toString())).toBeInTheDocument();
        expect(screen.getByAltText(mockProps.drinkName)).toBeInTheDocument();
    })
})

import { render, screen } from '@testing-library/react'
import { DisplaySingleProduct } from '../components/ecomm/Products';
import { BrowserRouter } from 'react-router-dom';

describe('DisplaySingleProduct', () => {
    const productEx = {
        id: 1,
        productName: "Roof Rack",
        price: 115.00,
        brand: "Saris",
        mainCategory: "Storage",
        description: "The number one storage rack for road-trip storage.",
        labels: [
            "storage",
            "vehicle"
        ],
        color: "black"
    }

    const MockLink = () => {
        return (
            <BrowserRouter>
                <DisplaySingleProduct {...productEx} />
            </BrowserRouter>
        )
    }

    test('Single product headers display', () => {
        render(<MockLink />);
        const product = screen.getAllByRole('heading');
        expect(product).toMatchSnapshot()
    })
})
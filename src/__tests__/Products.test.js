import { render, screen } from '@testing-library/react'
import { DisplaySingleProduct, ProductGallery } from '../components/ecomm/Products';
import { BrowserRouter } from 'react-router-dom';
import placeholderImg from '../images/product-placeholder.jpg';

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
    color: "black",
    image: placeholderImg
}

describe('DisplaySingleProduct', () => {
    const MockLink = () => {
        return (
            <BrowserRouter>
                <DisplaySingleProduct {...productEx} />
            </BrowserRouter>
        )
    }

    test('Product headers display', () => {
        render(<MockLink />);
        const product = screen.getAllByRole('heading');
        expect(product).toMatchSnapshot()
    })

    test('Product image displays', () => {
        render(<MockLink />);
        const img = screen.getByAltText(/Roof Rack/)
        expect(img).toBeInTheDocument();
    })
})

describe('ProductGallery', () => {
    const MockLink = (mockedChecked) => {
        return (
            <BrowserRouter>
                <ProductGallery {...mockedChecked} />
            </BrowserRouter>
        )
    }

    test('Product with ID of 2 displays', () => {
        render(<MockLink checkedCount={2} />);
        const product = screen.getByAltText(/Natural Walking Stick/)
        expect(product).toBeInTheDocument();
    })

    test('Multiple products display if nothing is selected', () => {
        render(<MockLink checkedCount={0} />);
        const products = screen.getAllByRole('heading', { level: 3} )
        expect(products).toHaveLength(4)
    })
})
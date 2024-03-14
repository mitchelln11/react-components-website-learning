import { render, screen } from '@testing-library/react';
import ShippingFields from '../components/ecomm/shippingFields';

describe('ShippingFields', ()=> {

    beforeEach(() => {
        render(<ShippingFields />);
    })

    test('Street field displays on load', ()=> {
        const streetField = screen.getByPlaceholderText('Street');
        expect(streetField).toBeInTheDocument();
    })

    test('City field displays on load', ()=> {
        const cityField = screen.getByPlaceholderText('City');
        expect(cityField).toBeInTheDocument();
    })

    test('Zipcode field displays on load', ()=> {
        const zipField = screen.getByPlaceholderText('Zipcode');
        expect(zipField).toBeInTheDocument();
    })

    test('State dropdown contains a state on load', ()=> {
        const statesDrop = screen.getByRole('option', { name: "Hawaii" });
        expect(statesDrop).toBeInTheDocument();
    })
})
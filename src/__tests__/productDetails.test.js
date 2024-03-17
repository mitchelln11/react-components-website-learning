import Product from "../components/ecomm/productDetails";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Product', ()=> {
    test('O Hamburgers! header appears when no parameter is in the URL', ()=> {
        render(<Product />);
        const productHeader = screen.getByText('O Hamburgers!');
        expect(productHeader).toBeInTheDocument();
    })

    test('Product header appears when parameter is in the URL', ()=> {
        const productId = '2';
        // https://medium.com/@bobjunior542/using-useparams-in-react-router-6-with-jest-testing-a29c53811b9e
        render(
            <MemoryRouter initialEntries={[`/product/${productId}`]}>
                {/* <Routes> and <Route> are copied from actual implementation, MemoryRouter is new */}
                <Routes>
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
            </MemoryRouter>
        );
        // The text matches header text from the product with the matching ID
        const tagsHeader = screen.getByText('Natural Walking Stick')
        expect(tagsHeader).toBeInTheDocument();
    })
})
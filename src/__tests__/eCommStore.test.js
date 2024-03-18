import { BrowserRouter } from 'react-router-dom';
import { StoreSection } from '../components/ecomm/eCommStore';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'


describe('eCommStore', ()=> {
    // We do not care about the product links, so we are mocking them with BrowserRouter
    const MockStoreSection = () => {
        return (
            <BrowserRouter>
                <StoreSection />
            </BrowserRouter>
        )
    }

    beforeEach(() => {
        render(<MockStoreSection />);
    })

    test('Aside displays on render', ()=> {
        expect(screen.getByRole('complementary', 'aside')).toBeInTheDocument();
    })

    test('Checkboxes all start off unchecked', ()=> {
        expect(screen.getAllByRole('checkbox', { checked: false})).toHaveLength(6)
    })

    test('Checking box removes item from gallery', async ()=> {
        const user = userEvent.setup()
        const allChecksOff = screen.getAllByRole('checkbox');
        await user.click(allChecksOff[0]);
        const prodToBeRemoved = screen.queryByText(/Natural Walking Stick/);
        expect(prodToBeRemoved).not.toBeInTheDocument();
    })
})
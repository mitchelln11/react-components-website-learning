import { render, screen } from '@testing-library/react'
import { StateDropdown } from '../components/formStateDropdown'

describe('formStateDropdown', () => {
    test('California is in the list of dropdown options', () => {
        render(<StateDropdown />);
        expect(screen.getByRole('option', { name: "Alabama" })).toBeInTheDocument();
    });

    test('Puerto Rico is not in the list of dropdown options', () => {
        render(<StateDropdown />);
        const puertoRico = screen.queryByText('Puerto Rico')
        expect(puertoRico).not.toBeInTheDocument();
    });
});
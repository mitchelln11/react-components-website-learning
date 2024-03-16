import { render, screen } from '@testing-library/react';
import FormFill from '../components/formFill';

describe('FormFill', () => {

    test('First Name placeholder renders', () => {
        render(<FormFill />);
        const firstNamePlaceholder = screen.getByPlaceholderText('First Name')
        expect(firstNamePlaceholder).toBeInTheDocument();
    });

    test('Last Name placeholder renders', () => {
        render(<FormFill />);
        const lastNamePlaceholder = screen.getByPlaceholderText('Last Name')
        expect(lastNamePlaceholder).toBeInTheDocument();
    });

})
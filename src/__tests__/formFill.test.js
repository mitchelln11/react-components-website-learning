import { render, screen, cleanup } from '@testing-library/react';
import FormFill from '../components/formFill';

afterAll(() =>{
    cleanup();
});

describe('Placeholder text', () => {

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
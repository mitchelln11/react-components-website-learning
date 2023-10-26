import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../pages/error-page'

test.only('Historical Facts header renders', () => {
    render(<ErrorBoundary />);
    const errorHeader = screen.getByText('O Hamburgers!');
    expect(errorHeader).toBeInTheDocument();
});
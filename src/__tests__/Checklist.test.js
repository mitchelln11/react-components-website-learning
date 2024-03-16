import { GenerateCheckListItem, DisplayAllChecklistItems } from '../components/ecomm/Checklist';
import { render, screen } from '@testing-library/react';

describe('Checklist React tests', ()=> {
    const mockOnChange = jest.fn();
    const mockProductData = [
        {
            id: 0,
            brand: 'Saris',
            checked: true,
            onChange: mockOnChange,
            productName: "Roof Rack",
        },
        {
            id: 1,
            brand: 'Yakima',
            checked: true,
            onChange: mockOnChange,
            productName: "Trailer Hitch",
        },
        {
            id: 2,
            brand: 'Thule',
            checked: false,
            onChange: mockOnChange,
            productName: "Carbon Fiber Spoiler"
        }
    ]
    
    test('Individual checkbox displays', ()=> {
        render(<GenerateCheckListItem {...mockProductData[1]} />);
        const checkbox = screen.getByText('Yakima')
        expect(checkbox).toBeInTheDocument();
    })

    test('Several checkboxes display', ()=> {
        render(<DisplayAllChecklistItems prodVal="brand" isChecked={true} />);
        const checkboxItems = screen.getAllByRole('checkbox');
        expect(checkboxItems).toHaveLength(3);
    })
})
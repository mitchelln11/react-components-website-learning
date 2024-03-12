import { queryAllByRole, render, screen } from '@testing-library/react'
import TagList from '../components/ecomm/TagList';

describe('TagList', ()=> {
    const labelsEx = [
        "steel",
        "aluminum",
        "titanium"
    ]

    test('Product labels display', async () => {
        render(<TagList productLabels={labelsEx} />);
        const prodLabels = await screen.findAllByRole('listitem');
        expect(prodLabels).toHaveLength(3);
    })

    test('Empty array displays when no attributes are passed', () => {
        render(<TagList productLabels={[]} />);
        const prodLabels = screen.queryAllByRole('listitem');
        expect(prodLabels).toEqual([])
    })
})
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import HandlePanelInteraction from '../components/accordion';

const mockRevealPanel = jest.fn()

afterAll(() =>{
    cleanup();
});

describe('Accordion', () => {
    const implementedVars = {
        q2: {
            id: 1,
            question : "Where Did the term \"Black-Balled\" come from",
            answer : "black-balled"
        },
    }

    test('Second question renders', () => {
        render(<HandlePanelInteraction {...implementedVars} />);
        const secondQuestion = screen.getByText(implementedVars.q2.question)
        expect(secondQuestion).toBeInTheDocument();
    });

    // I think the accordion has to be opened first before seeing the answer in the test
    test('Toggle elements are in document', async () => {
        render(<HandlePanelInteraction />);
        const toggleElements = screen.getAllByRole('button');
        expect(toggleElements).toBeInTheDocument;
    });

    test('Second toggle answer displays after clicking toggle', async () => {
        const { container } = render(<HandlePanelInteraction />);
        const secondToggleElement = container.querySelector('.accordion:nth-child(2) > .accordion-header-wrapper > .accordion-arrow');
        fireEvent.click(secondToggleElement)
        const secondAnswer = container.querySelector('.accordion:nth-child(2) > .accordion-answer > p')
        expect(secondAnswer).toHaveTextContent('During the American civil war')
    });
})
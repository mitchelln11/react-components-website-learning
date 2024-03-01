import { render, screen, fireEvent } from '@testing-library/react';
import Accordion, { HandlePanelInteraction } from '../components/accordion';

describe('Accordion', () => {
    const implementedVars = {
            id: 1,
            question : "Where Did the term \"Black-Balled\" come from",
            answer : "black-balled"
    }

    test('Question renders', () => {
        render(<HandlePanelInteraction {...implementedVars} />);
        const secondQuestion = screen.getByText(implementedVars.question)
        expect(secondQuestion).toBeInTheDocument();
    });

    test('Toggle elements are in document', () => {
        render(<HandlePanelInteraction {...implementedVars} />);
        const toggleElements = screen.getAllByRole('button');
        expect(toggleElements).toBeInTheDocument;
    });

    test('Answer displays after clicking toggle', async () => {
        render(<HandlePanelInteraction {...implementedVars} />);
        const secondToggleElement = screen.getByTestId('accordionIcon1');
        expect(secondToggleElement).toBeInTheDocument();
        fireEvent.click(secondToggleElement)
        const secondAnswer = await screen.findByTestId('accordionAnswer1');
        expect(secondAnswer).toHaveTextContent('black-balled')
    });

    test('Multiple quesitons and anwsers display via mapping function', () => {
        render(<Accordion />);
        const allArrows = screen.getAllByTestId(/accordionIcon/)
        expect(allArrows).toHaveLength(3)
    })
})
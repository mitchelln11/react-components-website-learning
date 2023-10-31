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
        render(<HandlePanelInteraction 
            id="1"
            question='Where Did the term \"Black-Balled\" come from'
            answer="During the American civil war, a wooden box existed as almost a ballot dropbox. When something came to a vote, such as a promotion or demotion, the effected officer or soldier would hold this wooden box from a wooden handle over their shoulder. The voters walked behind and dropped either a white or a black ball into a hole that dropped into the box. The white ball meant the soldier or officer voting approved. If the voting officer or soldier disapproved, they would drop the black ball in. If the effected soldier or officer received 3 black balls, the vote or promotion failed leaving the soldier or officer none the wiser as to who black-balled them."
            revealPanel={false}
            setRevealPanel={mockRevealPanel}
            />
        );
        const toggleElements = screen.getAllByRole('button');
        expect(toggleElements).toBeInTheDocument;
    });

    test('Second toggle answer displays after clicking toggle', async () => {
        const { container } = render(<HandlePanelInteraction 
            id="1"
            question='Where Did the term \"Black-Balled\" come from'
            answer="During the American civil war, a wooden box existed as almost a ballot dropbox. When something came to a vote, such as a promotion or demotion, the effected officer or soldier would hold this wooden box from a wooden handle over their shoulder. The voters walked behind and dropped either a white or a black ball into a hole that dropped into the box. The white ball meant the soldier or officer voting approved. If the voting officer or soldier disapproved, they would drop the black ball in. If the effected soldier or officer received 3 black balls, the vote or promotion failed leaving the soldier or officer none the wiser as to who black-balled them."
            revealPanel={false}
            setRevealPanel={mockRevealPanel}
            />
        );
        const secondToggleElement = container.querySelector('.accordion:nth-child(2) > .accordion-header-wrapper > .accordion-arrow')
        // const secondToggleElement = screen.getByTestId('accordionIcon1')
        fireEvent.click(secondToggleElement)
        const secondAnswer = container.querySelector('.accordion:nth-child(2) > .accordion-answer > p')
        expect(secondAnswer).toHaveTextContent('During the American civil war')
    });
})
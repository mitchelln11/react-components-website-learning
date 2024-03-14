import { render, screen } from '@testing-library/react';
import { ModalBtn } from '../components/ModalPopUp';
import { ModalContext } from '../App';

describe.skip('ModalPopUp', ()=> {
    test('Modal button appears on load', ()=> {
        render(<ModalBtn />);
        
        const btnText = screen.getByText('Btn Test');
        const spyProdIds = jest.spyOn(ModalContext, revealModal);
        
        console.log(btnText);
        expect(btnText).toBe('Btn Test')
    })
})
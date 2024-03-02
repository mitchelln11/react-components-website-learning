/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import CcLogic, { getCcLogo } from '../components/ecomm/creditCardLogic';
import '@testing-library/jest-dom'

describe('creditCardLogic', () => {
    describe('getCcLogo', () => {
        test('returns default value', () => {
            expect(getCcLogo("")).toBe("")
        })

        test('returns amex Fontawesome Icon', () => {
            const ccVal = getCcLogo("amex");
            // Unless there's a way to find a key with a specific value, matchSnapshot may be the only way to test these.
            expect(ccVal).toMatchSnapshot();
        })

        test('returns Diners Fontawesome Icon', () => {
            const ccVal = getCcLogo("diners");
            expect(ccVal).toMatchSnapshot();
        })

        test('returns Discover Fontawesome Icon', () => {
            const ccVal = getCcLogo("discover");
            expect(ccVal).toMatchSnapshot();
        })

        test('returns JCB Fontawesome Icon', () => {
            const ccVal = getCcLogo("jcb");
            expect(ccVal).toMatchSnapshot();
        })

        test('returns Mastercard Fontawesome Icon', () => {
            const ccVal = getCcLogo("mastercard");
            expect(ccVal).toMatchSnapshot();
        })

        test('returns Visa Fontawesome Icon', () => {
            const ccVal = getCcLogo("visa");
            expect(ccVal).toMatchSnapshot();
        })
    })

    describe('CcLogic', () => {
        test('mastercard logo displays if typing 25', async () => {
            const { container } = render(<CcLogic fieldId={"cc-field"} />)
            const input = screen.getByPlaceholderText('Ex: 4502783790218767')
            fireEvent.change(input, {target: {value: '25'}})
            const svgIcon = container.querySelector('.fa-cc-mastercard')
            expect(svgIcon).toBeInTheDocument()
        })

        // <svg
        //     aria-hidden="true"
        //     class="svg-inline--fa fa-cc-mastercard"
        //     data-icon="cc-mastercard"
        //     data-prefix="fab"
        //     focusable="false"
        //     role="img"
        //     viewBox="0 0 576 512"
        //     xmlns="http://www.w3.org/2000/svg"
        // >

        test('SVG container does not display log before typing', async () => {
            render(<CcLogic fieldId={"cc-field"} />)
            const svgContainer = screen.getByTestId('cc-logo-container')
            expect(svgContainer).toBeEmptyDOMElement()
        })

        test('User can type into credit card field', async () => {
            render(<CcLogic fieldId={"cc-field"} />)
            const input = screen.getByPlaceholderText('Ex: 4502783790218767')
            userEvent.type(input, '25')
            const type25 = await screen.findByDisplayValue('25')
            expect(type25).toBeVisible()
        })
    })
})
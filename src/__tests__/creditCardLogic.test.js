/**
 * @jest-environment jsdom
 */
import { expect, test } from '@jest/globals';
import { screen, render, fireEvent, findByRole } from '@testing-library/react'
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
        test('input displays in component', () => {
            render(<CcLogic fieldId={"cc-field"} />)
            const input = screen.getByPlaceholderText('Ex: 4502783790218767')
            expect(input).toBeInTheDocument()
        })

        test('input displays in component', async () => {
            const { container } = render(<CcLogic fieldId={"cc-field"} />)
            const input = screen.getByPlaceholderText('Ex: 4502783790218767')
            fireEvent.change(input, {target: {value: '25'}})
            const svgIcon = container.querySelector('.fa-cc-mastercard')
            expect(svgIcon).toBeInTheDocument()
        })
    })
})
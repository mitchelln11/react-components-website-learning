/**
 * @jest-environment jsdom
 */
import { findByRole, fireEvent, queryByRole, render, screen, waitFor, within } from '@testing-library/react'
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
            // const input = screen.getByPlaceholderText('Ex: 4502783790218767')
            const svgContainer = screen.getByTestId('cc-logo-container')
            // fireEvent.change(input, {target: {value: '25'}})
            // userEvent.type(input, '25')
            expect(svgContainer).toBeEmptyDOMElement()
            // const svgIcon = await screen.findByText('svg')
            // const svgIcon = screen.getByTestId('cc-logo-container')
            // const svgIcon = document.getElementsByTagName("svg");
            // const svgIcon = await screen.findByDisplayValue('25')
            // console.log(svgIcon)
            // await waitFor(() => {
            //     expect(queryByRole(img)).toBeInTheDocument()
            //   })
            // expect(svgIcon).toHaveAttribute('class', 'cc-fa-logo')
            // const test = await screen.findByRole('img')
            // expect(test).toBeVisible()
        })

        test('User can type into credit card field', async () => {
            render(<CcLogic fieldId={"cc-field"} />)
            const input = screen.getByPlaceholderText('Ex: 4502783790218767')
            userEvent.type(input, '25')
            const type25 = await screen.findByDisplayValue('25')
            expect(type25).toBeVisible()
        })

        // test.only('SVG logo appears on typing', async () => {

        //     const mocksetCcValue = jest.fn();
        //     const mocksetCctype = jest.fn();
        //     const mockGetCcLogo = jest.fn();

        //     render(<CcLogic fieldId={"cc-field"} />)
        //     const ccInput = screen.getByPlaceholderText('Ex: 4502783790218767')
        //     userEvent.type(ccInput, '25')
            
        //     // Maybe mock function that gets text version
        //     mocksetCcValue()
        //     mocksetCctype()
            
        //     // const svgContainer = screen.getByTestId('cc-logo-container')
        //     mockGetCcLogo()
        //     // console.log(svgContainer)
        //     const svgIcon = await screen.findAllByRole(waitFor('img'))
        //     console.log(svgIcon)
        //     // const innerSvgContainer = within(svgContainer).findByRole("img")
        //     // console.log(innerSvgContainer)
        //     // expect(svgIcon).toHaveAttribute('class', 'cc-fa-logo')
        //     // const mcLogo = await screen.findAllByDisplayValue
        //     // console.log(mcLogo)
        //     // const test = await screen.findByRole('img')
        //     expect(svgIcon).toBeVisible()
        // })

        // Working if you switch component to text version
        // test.only('SVG logo renders', async () => {
        //     render(<CcLogic fieldId={"cc-field"} />)
        //     const input = await screen.findByPlaceholderText('Ex: 4502783790218767')
        //     fireEvent.change(input, {target: {value: '25'}})
        //     const mcTxt = await screen.findByText('mastercard')
        //     expect(mcTxt).toHaveTextContent('mastercard')
        // })
    })
})
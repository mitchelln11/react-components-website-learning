import {expect, test} from '@jest/globals';
import { getCcLogo } from '../components/ecomm/creditCardLogic';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCcAmex, faCcDinersClub, faCcDiscover, faCcJcb, faCcMastercard, faCcVisa  } from "@fortawesome/free-brands-svg-icons";

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
})
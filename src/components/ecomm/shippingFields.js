import { StateDropdown } from '../formStateDropdown'
import CcLogic from './creditCardLogic'

export default function ShippingFields() {
    return (
        <form id="shipping-form-container">
            <input id="shipping-street" type="text" placeholder="Street" />
            <div className="form-two-col parent-flex">
                <input type="text" className="child-flex-one spacer-right" placeholder="City" />
                <select id="states" className="child-flex-one drop-right-fill" name="states">
                    <StateDropdown />
                </select>
            </div>
            <div className="parent-flex">
                <input type="text" className="child-flex-one spacer-right" placeholder="Zipcode" />
                <CcLogic fieldId="cc-field" />
            </div>
        </form>
    )
}
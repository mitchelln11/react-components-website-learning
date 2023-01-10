import { StateDropdown } from './formStateDropdown'

export default function FormFill() {
    return (
        <form>
            <input type="text" id="fname" name="fname" placeholder="First Name"></input>
            <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
            <select id="states" name="states">
                <StateDropdown />
            </select>
        </form>   
    )
}

import { stateList } from '../dataSamples/stateList';

export function StateDropdown() {
    return (
        stateList.map((state, index) => {
            return <option key={index} value={state}>{state}</option>
        })
    )
}

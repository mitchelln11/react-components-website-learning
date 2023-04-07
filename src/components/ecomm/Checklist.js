import { eCommValues } from './Products'
// import { productList } from '../../dataSamples/eCommProducts';

let checkboxesFound;

// Properly returning checked boxes and condensing to the id alone
export function findCheckedCheckboxes() {
    checkboxesFound = Array.from(document.querySelectorAll("input:checked")).map(check => check.id)
    console.log(checkboxesFound);
    return checkboxesFound;
}

// Generate individual checkbox item input
function GenerateCheckListItem({brand, isChecked, onChange}) {
    
    return (
        <div className="checkbox-item">
            <input 
                id={brand}
                type="checkbox"
                name={brand}
                value={brand}
                checked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={brand}>{brand}</label>
        </div>
    )
}

// Display all options without duplicates
export function DisplayAllChecklistItems({prodVal, isChecked, onChange}) {
    return (
        eCommValues[prodVal].map((item, index) => {
            return <GenerateCheckListItem key={index} brand={item} checked={isChecked} onChange={onChange} />
    })
)}
import { productList } from '../../dataSamples/eCommProducts';

// return individual values without duplicates
export const eCommValues = {
    id: [...new Set(productList.map(product => product.id))],
    name: [...new Set(productList.map(product => product.productName))],
    price: [...new Set(productList.map(product => product.price))],
    brand: [...new Set(productList.map(product => product.brand))],
    mainCategory: [...new Set(productList.map(product => product.mainCategory))],
    labels: [...new Set(productList.map(product => product.labels))],
    color: [...new Set(productList.map(product => product.color))],
    image: [...new Set(productList.map(product => product.image))]
}

// Properly returning checked boxes and condensing to the id alone
export function findCheckedCheckboxes() {
    let checkboxesFound = Array.from(document.querySelectorAll("input:checked")).map(check => check.id)
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
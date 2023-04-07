import { useState  } from "react";
import { eCommValues } from './Products'

// Generate individual checkbox item input
function GenerateCheckListItem({brand}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange(e) {
        setIsChecked(e.target.checked);
        // retrieveCheckedProducts();
    }

    return (
        <div className="checkbox-item">
            <input 
                id={brand}
                type="checkbox"
                name={brand}
                value={brand}
                checked={isChecked}
                onChange={handleOnChange}
            />
            <label htmlFor={brand}>{brand}</label>
        </div>
    )
}

// Display all options without duplicates
export function DisplayAllChecklistItems({prodVal}) {
    return (
        eCommValues[prodVal].map((item, index) => {
            return <GenerateCheckListItem key={index} brand={item} />
    })
)}
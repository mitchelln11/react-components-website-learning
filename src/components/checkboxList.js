import { useState } from 'react';

export function GenerateCheckboxList({checkboxValue, index}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckbox(e) {
        setIsChecked(e.target.checked)
    }

    return (
        <div className="checkbox-item" key={index}>
            <input 
                type="checkbox" 
                id={checkboxValue} 
                name={checkboxValue} 
                checked={isChecked} 
                onChange={handleCheckbox}
            />
            <label htmlFor={checkboxValue}>{checkboxValue}</label>
        </div>
    )
}
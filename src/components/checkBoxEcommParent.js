import { useState  } from "react";

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

export function DisplayProducts({id, productName, price, image}) {
    return (
        <div id={`product${id}`} className="product-tab" key={`product${id}`}>
            <h3>{productName}</h3>
            <h4>${price.toFixed(2)}</h4>
            <img src={image} alt={productName + id} />
        </div>
    )
}
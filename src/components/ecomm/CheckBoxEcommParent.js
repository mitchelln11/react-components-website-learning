import { useState  } from "react";
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

export function GenerateCheckboxList({checkboxValue, index, itemVal}) {
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
                data-product-element={itemVal}
            />
            <label htmlFor={checkboxValue}>{checkboxValue}</label>
        </div>
    )
}

// The actual UI logic on CheckboxSection.js

export function DisplayProducts({id, productName, price, image}) {
    return (
        <div id={`product${id}`} className="product-tab" key={`product${id}`}>
            <h3>{productName}</h3>
            <h4>${price.toFixed(2)}</h4>
            <img src={image} alt={productName + id} />
        </div>
    )
}
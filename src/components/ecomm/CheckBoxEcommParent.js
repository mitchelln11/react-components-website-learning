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

// Try referencing this article on sharing component states
// https://beta.reactjs.org/learn/sharing-state-between-components
// !!!!!!Need to Lift State Up!!!!!!

 // Outer shell to the Checkbox fields
 function GenerateFieldSet({ChecklistTitle, children}){
    return (
    <fieldset>
        <legend>{ChecklistTitle}</legend>
            {children}
    </fieldset>
    )
}

// Generate individual checkbox item input
function GenerateCheckListItem({brand}) {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange() {
        setIsChecked(!isChecked)
    }

    return (
        <div className="checkbox-item">
            <input 
                id={brand}
                type="checkbox"
                name={brand}
                checked={isChecked}
                onChange={handleOnChange}
            />
            <label htmlFor={brand}>{brand}</label>
        </div>
    )
}

export function StoreSection() {

    // Display all options without duplicates
    function DisplayAllChecklistItems({prodVal}) {
        return (
            eCommValues[prodVal].map((item, index) => {
                return <GenerateCheckListItem key={index} brand={item} />
        })
    )}

    // All the UI items
    return (
        <div id="product-store">
            <aside>
            <h3>Filters</h3>
            <GenerateFieldSet ChecklistTitle="Brands">
                <DisplayAllChecklistItems prodVal="brand" />
            </GenerateFieldSet>
            <GenerateFieldSet ChecklistTitle="Categories">
                <DisplayAllChecklistItems prodVal="mainCategory" />
            </GenerateFieldSet>
            </aside>
            <div id="product-gallery">
                <DisplayProducts prodVal="Fayet" />
            </div>
        </div>
    )
}

// function findCheckboxValue() {
//     const boxValue = document.getElementById('Merrell');
//     console.log(boxValue)
// }





// export function GenerateCheckboxList({title, isChecked, checkboxValue, index, itemVal}) {
//     const setIsChecked = useState(false);

//     function handleCheckbox() {
//         setIsChecked(!isChecked)
//     }

//     return (
//         <fieldset>
//             <legend>{title}</legend>
//             <div className="checkbox-item" key={index}>
//                 <input 
//                     type="checkbox" 
//                     id={checkboxValue} 
//                     name={checkboxValue} 
//                     checked={isChecked} 
//                     onChange={handleCheckbox}
//                     data-product-element={itemVal}
//                 />
//                 <label htmlFor={checkboxValue}>{checkboxValue}</label>
//             </div>
//         </fieldset>
//     )
// }

// export function GenerateCheckboxList({checkboxValue, index, itemVal}) {
//     const [isChecked, setIsChecked] = useState(false);

//     function handleCheckbox(e) {
//         setIsChecked(e.target.checked)
//     }

//     return (
//         <div className="checkbox-item" key={index}>
//             <input 
//                 type="checkbox" 
//                 id={checkboxValue} 
//                 name={checkboxValue} 
//                 checked={isChecked} 
//                 onChange={handleCheckbox}
//                 data-product-element={itemVal}
//             />
//             <label htmlFor={checkboxValue}>{checkboxValue}</label>
//         </div>
//     )
// }

// Display all options without duplicates
// export function GenericCheckboxList({title, prodVal}) {
//     return (
//         eCommValues[prodVal].map((item, index) => {
//             return <GenerateCheckboxList title={title} isChecked="false" checkboxValue={item} index={index} itemVal={prodVal} />
//     })
// )}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////----------STORE SECTION-----------------///////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// The actual UI logic on CheckboxSection.js
export function DisplayProducts({prodVal}) {

    // This works, just commenting for now
    // function findProduct() {
    //     console.log(productList.filter(item => item.brand === prodVal));
    // }

    // findProduct({prodVal})
    

    return (
        <div className="product-tab">
            <h3>{prodVal}</h3>
            {/* <h4>${productList[0].price.toFixed(2)}</h4> */}
            <h4>${productList.find(product => product.brand === {prodVal})}</h4>
            <img src={productList[0].image} alt={prodVal} />
        </div>
    )
}


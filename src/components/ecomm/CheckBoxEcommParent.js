import { useState  } from "react";
import { productList } from '../../dataSamples/eCommProducts';
import placeholderImg from '../../images/product-placeholder.jpg';

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
// function findCheckbox(desiredItem) {
//     let checkboxFound = document.getElementById(desiredItem)
//     console.log(checkboxFound)
// }

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

    function handleOnChange(e) {
        setIsChecked(e.target.checked)
    }

    // findCheckbox("Merrell")

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



export function StoreSection() {
    // Display all options without duplicates
    function DisplayAllChecklistItems({prodVal}) {
        return (
            eCommValues[prodVal].map((item, index) => {
                return <GenerateCheckListItem key={index} brand={item} />
        })
    )}

    // function ProductGallery() {
    //     console.log("Is this registering?")
    //     return(
    //         productList.map((product) => {
    //             return (
    //                 <h3>{product.brand}</h3>
    //                 // <DisplaySingleProduct key={product.id} productName={product.productName} price={product.price} />
    //             )
    //         })
    //     )
    // }


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
                <ProductGallery />
            </div>
        </div>
    )
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////----------STORE SECTION-----------------///////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

function DisplaySingleProduct({id, productName, price, image}) {
    return (
        <div id={`product${id}`} className="product-tab" key={`product${id}`}>
            <h3>{productName}</h3>
            <h4>${price.toFixed(2)}</h4>
            <img src={image} alt={productName + id} />
        </div>
    )
}

// The actual UI logic
export function ProductGallery() {

    // This works, just commenting for now
    // function findProduct() {
    //     console.log(productList.filter(item => item.brand === prodVal));
    // }

    // findProduct({prodVal})

    // This should be the else statement for when nothing is checked
    return (
        productList.map((product) => {
            return (
                <DisplaySingleProduct key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} id={product.id} />
            )
        })
    )
}


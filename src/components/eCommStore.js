import { productList } from '../dataSamples/eCommProducts.js';
import placeholderImg from '../images/product-placeholder.jpg';
// import { GenerateCheckboxList } from './checkboxList.js';

function DisplayProducts({id, productName, price, image}) {
    return (
        <div id={`product${id}`} className="product-tab" key={`product${id}`}>
            <h3>{productName}</h3>
            <h4>${price.toFixed(2)}</h4>
            <img src={image} alt={productName + id} />
        </div>
    )
}

export default function ProductGallery() {
    // const baseCheckbox = document.getElementById('#product-store > .checkbox-item > input')
    // switch(baseCheckbox + checkVal){
    //     case 'Merrell':
    //     productList.filter((product) => {
    //         return (
    //             <DisplayProducts key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} id={product.id} />
    //         )
    //     })  
    //     break;
    // }
    return (
        // Maybe put filter here instead of map. Leave below as the else statement
        productList.map((product) => {
            return (
                <DisplayProducts key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} id={product.id} />
            )
        })
    )
}
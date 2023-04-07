import placeholderImg from '../../images/product-placeholder.jpg';
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
    return (
        productList.map((product) => {
            return (
                <DisplaySingleProduct key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} id={product.id} />
            )
        })
    )
}
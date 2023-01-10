import { productList } from '../dataSamples/eCommProducts.js';
import placeholderImg from '../images/product-placeholder.jpg';

function DisplayProducts({id, productName, price, image}) {
    return (
        <div id={`product${id}`} className="product-tab" key={`product${id}`}>
            <h3>{productName}</h3>
            <h4>${price.toFixed(2)}</h4>
            <img src={image} alt={productName} />
        </div>
    )
}

export default function ProductGallery() {
    return (
        productList.map((product) => {
            return (
                <DisplayProducts key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} />
            )
        })
    )
}
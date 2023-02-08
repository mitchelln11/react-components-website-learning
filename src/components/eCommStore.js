import { productList } from '../dataSamples/eCommProducts.js';
import placeholderImg from '../images/product-placeholder.jpg';
import { DisplayProducts } from './checkBoxEcommParent.js';

export default function ProductGallery() {
    return (
        productList.map((product) => {
            return (
                <DisplayProducts key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} id={product.id} />
            )
        })
    )
}
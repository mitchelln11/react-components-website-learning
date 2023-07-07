import placeholderImg from '../../images/product-placeholder.jpg';
// import { useParams } from 'react-router-dom';
import { productList } from '../../dataSamples/eCommProducts';



export default function Product(productId) {
    // const productId = useParams();
    const product = productList.find((product) => product.id === productId);

    return (
        <div id="product-page">

            <div id="products">
            {console.log(product)}
            {/* Swapping out the number below will change the page correctly, but still need to figure out how to use specifically 1 parameter for a single product page */}
                <div className="image-section">
                    <img src={productList[1].image || placeholderImg} alt="Placeholder" />
                </div>
                <div className="product-info">
                    <h1>Product Page</h1>
                    <div className="additional-info"> 
                        <div>
                            <h2>{productList[1].price}</h2> 
                        </div>
                        <div>
                            <h3>{productList[1].brand}</h3>
                            <h4>{productList[1].color}</h4>
                            {productList[1].description}
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <h2>Tags</h2>
                <ul className="product-tags">
                    <li>footwear</li>
                    <li>men's</li>
                    <li>boot</li>
                    <li>hiking</li>
                    <li>camping</li>
                </ul>
                <p>These are hard-coded, but I could loop through the product labels in the future.</p>
            </footer>
        </div>
    )
}
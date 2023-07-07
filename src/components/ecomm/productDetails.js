import placeholderImg from '../../images/product-placeholder.jpg';
import { useParams } from 'react-router-dom';
import { productList } from '../../dataSamples/eCommProducts';

export default function Product() {
    // parameter used in 'useParams' must match the way it's spelled on the Route
    const { id } = useParams();

    return (
        <div id="product-page">
            <div id="products">
                <div className="image-section">
                    <img src={productList[id].image || placeholderImg} alt="Placeholder" />
                </div>
                <div className="product-info">
                    <h1>Product Page</h1>
                    <div className="additional-info"> 
                        <div>
                            <h2>{productList[id].price}</h2> 
                        </div>
                        <div>
                            <h3>{productList[id].brand}</h3>
                            <h4>{productList[id].color}</h4>
                            {productList[id].description}
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
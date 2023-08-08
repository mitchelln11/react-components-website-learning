import placeholderImg from '../../images/product-placeholder.jpg';
import { useParams } from 'react-router-dom';
import { productList } from '../../dataSamples/eCommProducts';
import TagList from './TagList';

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
                    {
                        productList[id].productName &&
                        <h2>{productList[id].productName}</h2>
                    }
                    <div className="additional-info"> 
                        {
                            productList[id].price &&
                            <div>
                                <h2>${parseFloat(productList[id].price).toFixed(2)}</h2>
                            </div>
                        } 
                        {
                            (productList[id].brand) || (productList[id].color) || (productList[id].description) ?
                            <div>
                                <h3>{productList[id].brand}</h3>
                                <h4>{productList[id].color}</h4>
                                {productList[id].description}
                            </div>
                            :
                            ""
                        }
                    </div>
                </div>
            </div>

            {
                productList[id].labels &&
                <footer>
                    <h2>Tags</h2>
                    <ul className="product-tags">
                        <TagList productLabels={productList[id].labels} />
                    </ul>
                </footer>
            }
        </div>
    )
}
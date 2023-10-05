import placeholderImg from '../../images/product-placeholder.jpg';
import { useParams } from 'react-router-dom';
import { productList } from '../../dataSamples/eCommProducts';
import TagList from './TagList';
import { checkProdId } from '../utils/checkProdIds';
import ErrorBoundary from '../../pages/error-page';

function ProductContainer(props) {
    return (
        <div id="product-page">
            <div id="products">
                {props.children}
            </div>
                
        </div>
    )
}

function ExistingProducts() {
    const { id } = useParams();
    return (
        <>
            <div className="image-section">
                <img src={productList[id].image || placeholderImg} alt={productList[id].productName} />
            </div>
            <div className="product-info">
                <h1>Product Page</h1>
                {
                    productList[id].productName &&
                    <h2>{productList[id].productName}</h2>
                }
                <div className="additional-info"> 
                    {
                        /* If price exists  */
                        productList[id].price &&
                        /* If price AND sales price exist  */
                        productList[id].price && productList[id].sale ?
                        <div className='price-container'>
                            <h2 className='regular-price'>${parseFloat(productList[id].price).toFixed(2)}</h2>
                            <h2 className='italic-text sale-price'>SALE: ${parseFloat(productList[id].sale).toFixed(2)}</h2>
                        </div>
                        :
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
        </>
    )
}

export default function Product() {
    // parameter used in 'useParams' must match the way it's spelled on the Route
    const { id } = useParams();

    if (checkProdId(id)) {
        return (
            <>
            <ProductContainer>
                <ExistingProducts />
            </ProductContainer>
            {
                productList[id].labels &&
                <footer>
                    <h2>Tags</h2>
                    <ul className="product-tags">
                        <TagList productLabels={productList[id].labels} />
                    </ul>
                </footer>
            }
            </>
        )
    } else {
        return ( 
            <ProductContainer>
                <div className="product-info">
                    <h1 class="centered-text">Product Page</h1>
                    <ErrorBoundary /> 
                </div>
            </ProductContainer>
        )
    }
    
}
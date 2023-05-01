import placeholderImg from '../../images/product-placeholder.jpg';
import { productList } from '../../dataSamples/eCommProducts';

function DisplaySingleProduct({id, productName, price, image}) {
    return (
        <div id={`product${id}`} className="product-tab" key={`product${id}`}>
            <h3>{productName}</h3>
            <h4>${parseFloat(price).toFixed(2)}</h4>
            <img src={image} alt={productName + id} />
        </div>
    )
}

// The actual UI logic
export function ProductGallery({checkedCount}) {
    const filteredProducts = () =>  {
        if(checkedCount.length > 0) {
            let newProductList = productList.filter(product => Object.values(product).some(prod => checkedCount.includes(prod)));
            return newProductList
        } else {
            return productList;
        }
    }

    let updatedProdList = filteredProducts();
    return (
        updatedProdList.map(product => {
            return (
                <DisplaySingleProduct key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} id={product.id} />
            )
        }) 
    )
}
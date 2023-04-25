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
export function ProductGallery({checkedArray}) {

    // Only working with a single checkbox. Flat out doesn't work, no errors to help
    function filteredProducts() {
        if(checkedArray.length > 0) {
            return productList.filter(product => product.brand.includes(checkedArray))
        } else {
            return productList;
        }
    }

    let updatedProdList = filteredProducts();
    console.log(updatedProdList);
    return (
        updatedProdList.map(product => {
            return (
                <DisplaySingleProduct key={product.id} productName={product.productName} price={product.price} image={product.image || placeholderImg} id={product.id} />
            )
        }) 
    )
}
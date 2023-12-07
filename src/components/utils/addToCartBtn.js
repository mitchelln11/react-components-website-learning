import { useState, useEffect } from "react"
import { productList } from "../../dataSamples/eCommProducts";

export default function AddToCart(prodId) {
    const [addTocart, setAddToCart] = useState([]);

    let productAdded;

    function handleAddCartBtn() {
        productAdded = productList.find(
            product => product.id === prodId.productId
        )

        // Figure out set the ID to the value
        setAddToCart(
            [
                ...addTocart, 
                {
                    id: productAdded.id,
                    productName: productAdded.productName,
                    price: productAdded.price,
                    sale: productAdded.sale,
                    brand: productAdded.brand,
                    color: productAdded.color,
                    image: productAdded.image
                }
            ]
        );
        console.log(productAdded);
    }

    // Figure out why the cart isn't actually updating
    // Add sidebar cart that displays when there's at least one product
    useEffect(() => {
        console.log(addTocart);
      });

    return (
        <button onClick={handleAddCartBtn}>Add to Cart</button>
    )
}
import { productList } from '../dataSamples/eCommProducts';

// NOT WORKING YET, NOT TIED TO ANOTHER FILE YET!!!
const brandFilter = productList.filter(product => {
    try {
        return product.brand === 'Merrell'
    } catch {
        console.log("Could not find that brand");
    }
});

export default function filterByBrand() {
    return (
        brandFilter.map(brand  => brand)
    )
}
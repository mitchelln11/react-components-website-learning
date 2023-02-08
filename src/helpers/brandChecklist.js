import { productList } from '../dataSamples/eCommProducts.js';
import { GenerateCheckboxList } from '../components/checkBoxEcommParent.js';

// Returns array of brand names without duplicates
const cleanBrands = () => {
    return [...new Set(productList.map(brand => brand.brand))];
}

// Display all options
export default function GenericCheckboxList() {
    let updatedList = cleanBrands();
    return (
        updatedList.map((item, index) => {
            return <GenerateCheckboxList key={index} checkboxValue={item} />
        })
    )
}

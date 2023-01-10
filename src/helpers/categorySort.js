import { productList } from '../dataSamples/eCommProducts';
import { categorySort } from './duplicateListItemRemoval'
import { GenerateCheckboxList } from '../components/checkboxList';

// Returns array of brand names without duplicates
// WORKING, JUST FOLLOW brandSort.js version to back to last working version
let categories = productList.map(product => product.mainCategory);

// Display all options
export default function CategoryCheckboxList() {
    let updatedList = categorySort(categories);
    return (
        updatedList.map((item, index) => {
            return <GenerateCheckboxList key={index} checkboxValue={item} />
        })
    )
}
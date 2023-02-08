import { productList } from '../dataSamples/eCommProducts';
import { categorySort } from './duplicateListItemRemoval'
import { GenerateCheckboxList } from '../components/checkBoxEcommParent';

let categories = productList.map(product => product.mainCategory);

export default function CategoryCheckboxList() {
    let updatedList = categorySort(categories);
    return (
        updatedList.map((item, index) => {
            return <GenerateCheckboxList key={index} checkboxValue={item} />
        })
    )
}
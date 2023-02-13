import { eCommValues, GenerateCheckboxList } from './CheckBoxEcommParent';

// Display all options without duplicates
export default function GenericCheckboxList({prodVal}) {
    return (
        eCommValues[prodVal].map((item, index) => {
            return <GenerateCheckboxList key={index} checkboxValue={item} data-product-element={prodVal} />
    })
)}
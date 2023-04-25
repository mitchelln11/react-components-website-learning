import { useState  } from "react";
import { DisplayAllChecklistItems } from './Checklist';
import { ProductGallery } from './Products';
// import { productList } from '../../dataSamples/eCommProducts';

// Outer shell to the Checkbox fields
function GenerateFieldSet({ChecklistTitle, children}){
    return (
    <fieldset>
        <legend>{ChecklistTitle}</legend>
            {children}
    </fieldset>
    )
}

// What needs to happen?
// 1. Start with empty array and full productList
// 2. When clicked, get the value of the checkbox
// 3. Add value of checkbox to empty array
// 4. Return new array
// 5. Run new array against product to display only checked items
// 6. If unchecked, get value of checkbox
// 7. Run checkbox value against array
//  7b. If it currently exists in array, remove it
// 8. Run newly, shortened array against products to show new, selected items
// 9. If none selected, show all
// function reducer(state, action) {
//     switch (action.type) {
//         case 'SET_CHECKED':
//             return {
//                 ...state, 
//                 checked: action.payload,
//             };
//         case 'VALUE_TO_ARRAY':
//             return {
//                 ...state, 
//                 selectedCeckboxes: action.payload,
//             };
//         default:
//             throw new Error("What the fudge u trying to do?");
//     }
// }

export function StoreSection() {
    const [isChecked, setIsChecked] = useState(false);
    const [checkedCount, setCheckedCount] = useState([]);

    // const [state, dispatch] = useReducer(reducer, {
    //     checked: false,
    //     selectedCeckboxes: []
    // });

    function handleOnChange(e) {
        setIsChecked(e.target.checked);

        // dispatch({ type: 'checked_box', payload: e.target.value})

        e.target.checked ?
        setCheckedCount([...checkedCount, e.target.value])
        :
        setCheckedCount(checkedCount.filter((count) => count !== e.target.value))
    }

    // All the UI items
    return (
        <div id="product-store">
            <aside>
            <h3>Filters</h3>
            <GenerateFieldSet ChecklistTitle="Brands">
                <DisplayAllChecklistItems prodVal="brand" isChecked={isChecked} onChange={handleOnChange} />
            </GenerateFieldSet>
            <GenerateFieldSet ChecklistTitle="Categories">
                <DisplayAllChecklistItems prodVal="mainCategory" isChecked={isChecked} onChange={handleOnChange} />
            </GenerateFieldSet>
            </aside>
            <div id="product-gallery">
                <ProductGallery checkedArray={checkedCount} /*dispatch={dispatch}*/ />
            </div>
        </div>
    )
}
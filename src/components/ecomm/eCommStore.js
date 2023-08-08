import { useReducer  } from "react";
import { DisplayAllChecklistItems } from './Checklist';
import { ProductGallery } from './Products';

// Outer shell to the Checkbox fields
function GenerateFieldSet({ChecklistTitle, children}){
    return (
    <fieldset>
        <legend>{ChecklistTitle}</legend>
            {children}
    </fieldset>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CHECKED':
            return {
                ...state, 
                isChecked: !state.isChecked,
            };
        case 'VALUE_TO_ARRAY':
            return {
                ...state,
                checkedCount: [...state.checkedCount, action.payload],
            };
        case 'REMOVE_FROM_ARRAY':
            return {
                ...state, 
                checkedCount: [...state.checkedCount].filter((count) => count !== action.payload),
            };
        default:
            throw new Error("What are you trying to do?");
    }
}

export function StoreSection() {
    const [state, dispatch] = useReducer(reducer, { isChecked: false, checkedCount: [] })

    function handleOnChange(e) {
        dispatch({type: 'SET_CHECKED', payload: e.target.checked});

        e.target.checked ?
        dispatch({type: 'VALUE_TO_ARRAY', payload: e.target.value})
        :
        dispatch({type: 'REMOVE_FROM_ARRAY', payload: e.target.value})
    }

    // All the UI items
    return (
        <div id="product-store">
            <aside>
            <h3>Filters</h3>
            <GenerateFieldSet ChecklistTitle="Brands">
                <DisplayAllChecklistItems prodVal="brand" isChecked={state.isChecked} onChange={handleOnChange} />
            </GenerateFieldSet>
            <GenerateFieldSet ChecklistTitle="Categories">
                <DisplayAllChecklistItems prodVal="mainCategory" isChecked={state.isChecked} onChange={handleOnChange} />
            </GenerateFieldSet>
            </aside>
            <div id="product-gallery">
                <ProductGallery checkedCount={state.checkedCount} />
            </div>
        </div>
    )
}
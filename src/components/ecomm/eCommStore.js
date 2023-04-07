import { useState  } from "react";
import { DisplayAllChecklistItems, findCheckedCheckboxes } from './Checklist';
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

export function StoreSection() {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange(e) {
        setIsChecked(e.target.checked);
        findCheckedCheckboxes()
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
                <ProductGallery />
            </div>
        </div>
    )
}
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

export function StoreSection() {
    // All the UI items
    return (
        <div id="product-store">
            <aside>
            <h3>Filters</h3>
            <GenerateFieldSet ChecklistTitle="Brands">
                <DisplayAllChecklistItems prodVal="brand" />
            </GenerateFieldSet>
            <GenerateFieldSet ChecklistTitle="Categories">
                <DisplayAllChecklistItems prodVal="mainCategory" />
            </GenerateFieldSet>
            </aside>
            <div id="product-gallery">
                <ProductGallery />
            </div>
        </div>
    )
}
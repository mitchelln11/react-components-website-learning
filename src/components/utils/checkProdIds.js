import { eCommValues } from "../ecomm/Checklist";

export function checkProdId(productParamId) {
    const prodIds = Object.keys(eCommValues.id) // list of all product ids
    const productIds = prodIds.includes(productParamId) // boolean
    return productIds;
}
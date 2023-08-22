import { eCommValues } from "../ecomm/Checklist";

export function checkProdId(productParamId) {
    const prodIds = Object.keys(eCommValues.id)
    const productIds = prodIds.includes(productParamId)
    return productIds;
}
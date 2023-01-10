export function categorySort(listToCheck) {
    return [...new Set(listToCheck.map(item => item))]; 
}
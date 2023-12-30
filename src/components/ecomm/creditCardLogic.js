// const ccRegex = /[0-9]|\./;

// export function pullCcInputValue() {
//     // console.log(document.getElementById("cc-field").value)
//     // may have to set up an input state first to get full value
//     return document.getElementById("cc-field").value
// }

export function parseCcForType(ccNum) {
    switch (true) {
        case ccNum.charAt(0) === "2":
            return "Mastercard"
        case ccNum.charAt(0) === "3":
            return "American Express"
        case ccNum.charAt(0) === "4":
            return "Visa"
        case ccNum.charAt(0) === "5":
            return "Mastercard"
        case (ccNum.charAt(0) === "6"):
            return "Discover"
        default: 
            return "No Credit Card Match"
    }
}

// export function determineCcCompany () {
//     // still have to determine which numbers mean which CC company (Switch Case?)
//     // Do I need a separate function that takes in a cc number and parses through?
//     // if 1st keypress is *, remove * from the options
//       // 3 = American Express, 4 = Visa, 2,5 = Mastercard, 6 = Discover, 7 = Gas Card, 9 = government
//     // If 2nd keypress, remove * from options
//     // Display CC company

//     switch(x) {
//         case y:
//             // code
//             break;
//         case z:
//             // code
//             break;
//         default:
//             // code
//     }
// }

// export default function CcLogic({fieldId}) {
//     // Limit field to numbers
//     // require specific number of characters
//     // remove number arrows
//     pullCcInputValue()
//     return (
//         <input id={fieldId} name={fieldId} type="text" inputMode="numeric" pattern="[0-9]+" placeholder="Ex: 4502783790218767" />
//     )   
// }
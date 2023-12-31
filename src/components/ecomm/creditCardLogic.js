import { useState, useRef } from "react";
import { formatCreditCard, getCreditCardType } from "cleave-zen";

// export function parseCcForType(ccNum) {
//     switch (true) {
//         case ccNum.charAt(0) === "2":
//             return "Mastercard"
//         case ccNum.charAt(0) === "3":
//             return "American Express"
//         case ccNum.charAt(0) === "4":
//             return "Visa"
//         case ccNum.charAt(0) === "5":
//             return "Mastercard"
//         case (ccNum.charAt(0) === "6"):
//             return "Discover"
//         default: 
//             return "No Credit Card Match"
//     }
// }

export default function CcLogic({fieldId}) {
    const inputRef = useRef(null)
    const [ ccValue, setCcValue ] = useState('');
    const [ ccType, setCctype ] = useState('');

    const handleCcChange = (event) => {
        const value = event.target.value;
        setCcValue(formatCreditCard(value));
        setCctype(getCreditCardType(value));
    }
    
    return (
        <>
            <input 
                ref={inputRef}
                value={ccValue}
                id={fieldId} 
                name={fieldId} 
                onChange={handleCcChange} 
                maxlength="19" 
                type="text" 
                inputmode="numeric" 
                pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" 
                placeholder="Ex: 4502783790218767" 
            />
            <div>type: {ccType} </div>
        </>
    )   
}
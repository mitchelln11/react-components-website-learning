import { useState, useRef } from "react";
import { formatCreditCard, getCreditCardType } from "cleave-zen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcAmex, faCcDinersClub, faCcDiscover, faCcJcb, faCcMastercard, faCcVisa  } from "@fortawesome/free-brands-svg-icons";

export function getCcLogo(ccType) {
    switch (true) {
        case ccType === "amex":
            return <FontAwesomeIcon icon={faCcAmex} />
        case ccType === "diners":
            return <FontAwesomeIcon icon={faCcDinersClub} />
        case ccType === "discover":
            return <FontAwesomeIcon icon={faCcDiscover} />
        case ccType === "jcb":
            return <FontAwesomeIcon icon={faCcJcb} />
        case ccType === "mastercard":
            return <FontAwesomeIcon icon={faCcMastercard} />
        case ccType === "visa":
            return <FontAwesomeIcon icon={faCcVisa} />
        default: 
            return ""
    }
}

export default function CcLogic({fieldId}) {
    const inputRef = useRef(null)
    const [ ccValue, setCcValue ] = useState('');
    const [ ccType, setCctype ] = useState('');

    const handleCcChange = (event) => {
        const value = event.target.value;
        setCcValue(formatCreditCard(value));

        // Figures out Type of CC, returns text format (MC, Visa, etc)
        setCctype(getCreditCardType(value));
    }
    
    return (
        <>
            <input 
                ref={inputRef}
                value={ccValue}
                id={fieldId} 
                className="child-flex-one spacer-right"
                name={fieldId} 
                onChange={handleCcChange} 
                maxLength="19" 
                type="text" 
                inputMode="numeric" 
                pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" 
                placeholder="Ex: 4502783790218767" 
            />
            {/* Converts text version type to FortAwesome icon via switch statement */}
            {/* Working version !!!! Do not delete below */}
            <div className="cc-fa-logo" data-testid="cc-logo-container">{getCcLogo(ccType)}</div>

            {/* Testing text version in order to get test working */}
            {/* <div className="cc-fa-logo" data-testid="cc-logo-container">{ccType}</div> */}
        </>
    )   
}
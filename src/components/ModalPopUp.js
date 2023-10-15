import { useState, useContext, createContext } from "react";

const ModalContext = createContext(false);

export function ModalBtn() {
    const [revealModal, setRevealModal] = useState(false);
    return(
        <ModalContext.Provider value={revealModal}>
            <div className="modal-btn" onClick={() => {setRevealModal(true)}}>Btn Test</div>
        </ModalContext.Provider>
    )
}

export function ModalPopUp() {
    const { revealModal, setRevealModal } = useContext(ModalContext);
    if (revealModal === true) {
        return (
            <div className="modal">
                <div className="inner-container">
                    <h2>Modal Test</h2>
                    <div className="modal-btn" onClick={() => {setRevealModal(false)}}>Test Close button</div>
                </div>
            </div>
        )
    }
}
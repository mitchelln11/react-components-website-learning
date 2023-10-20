import { useContext, useEffect } from "react";
import { ModalContext } from '../App';

export function ModalPopUp() {
    const [ revealModal, setRevealModal ] = useContext(ModalContext);

    useEffect(() => {
        console.log(revealModal)
    })

    function handleCloseModal () {
        setRevealModal(false)
    }

    if (revealModal === true) {
        return (
            <div className="modal">
                <div className="inner-container">
                    <h2>Modal Test</h2>
                    <div className="modal-btn" onClick={handleCloseModal}>Test Close button</div>
                </div>
            </div>
        )
    }
}

export function ModalBtn() {
    const [ , setRevealModal ] = useContext(ModalContext);

    function handleOpenModal () {
        setRevealModal(true)
    }

    return(
        <div className="modal-btn" onClick={handleOpenModal}>Btn Test</div>
    )
}

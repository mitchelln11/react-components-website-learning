import { useContext } from "react";
import { ModalContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export function ModalPopUp() {
    const [ revealModal, setRevealModal ] = useContext(ModalContext);

    const handleCloseModal = () => {
        setRevealModal(false)
    }

    if (revealModal) {
        return (
            <div className="modalBackdrop" onClick={handleCloseModal}>
                <div className="modal" onClick={(e) => {e.stopPropagation()}}>
                    <div className="inner-container">
                        <FontAwesomeIcon icon={faXmark}  onClick={handleCloseModal} className="modalX" />
                        <h2>Modal Test</h2>
                    </div>
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

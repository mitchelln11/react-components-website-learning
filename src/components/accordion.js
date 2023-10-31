import { useState } from "react";
import { totalQuestions } from "../dataSamples/qas.js";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export function HandlePanelInteraction({id, question, answer}) {
    const [revealPanel, setRevealPanel] = useState(false);

    function panelClick() {
        setRevealPanel(!revealPanel);
    }

    return (
        <div className="accordion">
            <div className="accordion-header-wrapper" onClick={panelClick}>
                {
                    revealPanel && <div className="active-indicator"></div>
                }
                <div className={"accordion-header"}>
                    <h3 id={`accordionTitle${id}`} className="accordion-title">{question}</h3>
                </div>
                {
                    revealPanel ? <div className="accordion-arrow" data-testid={`accordionIcon${id}`} role="button"><FaAngleUp /></div> : <div className="accordion-arrow" data-testid={`accordionIcon${id}`} role="button"><FaAngleDown /></div>
                }
            </div>
            {/* Show panel only if revealPanel is true */}
            {
                revealPanel && 
                <div className="accordion-answer">
                    <p id={`accordionAnswer${id}`} className="accordion-panel">{answer}</p>
                </div>
            }
        </div>
    )
}

export default function Accordion() {
    return (
        totalQuestions.map((faq) => {
            return <HandlePanelInteraction key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        })
    )
}
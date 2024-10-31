import React, { useState } from 'react';
import ArrowDown from '../assets/pictures/arrow-down-info.svg';
import ArrowUp from '../assets/pictures/arrow-up-info.svg';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); //Skapar en array där vi kollar om isOpen är sant eller falsk.

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Öpnnar boxen och tar fram svaret vid klick.
  };

  return (
   
    <div className="information-box" onClick={toggleAccordion}>
        <div className="space">
            <div class="buttons-container-faq">
            <h4>{question}</h4>
                <button
                onClick={toggleAccordion}
                className={`arrow-down-btn-grey ${isOpen ? "arrow-down-btn-blue" : "arrow-down-btn-grey"}`}>
                <img src={isOpen ? ArrowUp : ArrowDown} alt="Toggle button" />
            </button>
            </div>
        </div>
      {isOpen && (
        <div className="open-box">
            <p className="open-box-info">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

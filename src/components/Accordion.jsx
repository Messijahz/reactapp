import React from 'react';
import AccordionItem from '../components/AccordionItem';


const Accordion = () => {
  const faqData = [
    {
      question: "Is any of my personal information stored in the App?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et possimus nobis dolorem temporibus, distinctio esse suscipit veritatis voluptates atque delectus?",
    },
    {
      question: "What formats can I download my transaction history in?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et possimus nobis dolorem temporibus, distinctio esse suscipit veritatis voluptates atque delectus?",
    },
    {
      question: "Can I schedule future transfers?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et possimus nobis dolorem temporibus, distinctio esse suscipit veritatis voluptates atque delectus?",
    },
    {
      question: "When can I use Banking App services?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et possimus nobis dolorem temporibus, distinctio esse suscipit veritatis voluptates atque delectus?",
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et possimus nobis dolorem temporibus, distinctio esse suscipit veritatis voluptates atque delectus?",
    },
    {
      question: "What happens if I forget or lose my password?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et possimus nobis dolorem temporibus, distinctio esse suscipit veritatis voluptates atque delectus?",
    },
  ];

  return (
    <div className="information-box-container">
      {faqData.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Accordion;
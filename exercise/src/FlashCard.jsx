import { useState } from "react";
import "./FlashCard.css";

const questions = [
  {
    id: 1,
    text: "What language is React based on1?",
    answer: "javascript",
  },
  {
    id: 2,
    text: "What language is React based on2?",
    answer: "javascript",
  },
  {
    id: 3,
    text: "What language is React based on3?",
    answer: "javascript",
  },
  {
    id: 4,
    text: "What language is React based on4?",
    answer: "javascript",
  },
  {
    id: 5,
    text: "What language is React based on5?",
    answer: "javascript",
  },
  {
    id: 6,
    text: "What language is React based on6?",
    answer: "javascript",
  },
];

export default function FlashCard() {
  const [selectedId, setSelectedId] = useState(5);
  function handleClick(id){
    setSelectedId(id !==selectedId ? id : null)
  }

  return (
    <div className="container">
      <ul>
        {questions.map((question) => (
          <li
            key={question.id}
            className={selectedId === question.id ? "answer" : ""}
            onClick={(e) => handleClick(question.id)}
          >
            {selectedId === question.id ? question.answer : question.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

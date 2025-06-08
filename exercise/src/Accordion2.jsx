import { useState } from "react";
import "./Accordion.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(1);
  function handleToggle(num) {
    setCurOpen(num);
  }
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <div key={i}>
          <AccordionItem
            num={i + 1}
            title={item.title}
            text={item.text}
            curOpen={curOpen}
            onToggle={handleToggle}
          />
        </div>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, curOpen, onToggle }) {
  const isOpen = num === curOpen;

  return (
    <div
      className={isOpen ? "open item" : "item"}
      onClick={() => onToggle(isOpen ? null : num)}
    >
      <p className="number">{num < 10 ? `0${num}` : `${num}`}</p>
      <p className="title ">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
}

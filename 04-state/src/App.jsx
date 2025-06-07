import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <>
      <Stats />
    </>
  );
}

export default App;

function Stats() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Test" });
  const [isOpen, setIsOpen] = useState(true);

  function stepForward() {
    step < 3 ? setStep((s) => s + 1) : null;

    // Bad Practice
    // test.name = "Aakash";
    // setTest({...test, name:'Aakash', age:20})
  }
  function stepBackward() {
    step > 1 ? setStep((s) => s - 1) : null;
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} {test.age}d */}
          </p>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={stepBackward}><span>👈️</span>Previous</Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={stepForward}><span>👉️</span>Next</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

import { useState } from "react";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function forwardCount() {
    setCount((c) => c + step);
  }
  function backwordCount() {
    setCount((c) => c - step);
  }
  function handleReset(){
    setCount(0)
    setStep(1)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <p>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />{" "}
        {step}
      </p>
      <p>
        <button onClick={backwordCount} >-</button>
        <input type="text" value={count} onChange={(e)=> setCount(e.target.value)}/>
        <button onClick={forwardCount}>+</button>
      </p>
      <p>{count === 0 ? "Today is " : count > 0 ? `${count} Days from today is`: `${count} Days before today is `} {date.toDateString()}</p>
      {count !==0 || step !==1 ? <button onClick={handleReset}>reset</button> : null}
    </div>
  );
}

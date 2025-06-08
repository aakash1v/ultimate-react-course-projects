import { useState } from "react";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div
      className="container"
      style={{ listStyle: "none", textAlign: "center" }}
    >
      <ul style={{ listStyle: "none" }}>
        <li>
          <button onClick={() => setStep((s) => s - 1)}>-</button> Step: {step}{" "}
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </li>
        <li>
          <button onClick={() => setCount((c) => c - step)}>-</button> Count:{" "}
          {count} <button onClick={() => setCount((c) => c + step)}>+</button>
        </li>
      </ul>
      <h4>
        {count === 0
          ? "Today"
          : count > 0
          ? `${count} days from today `
          : `${-count} days before today `}{" "}
        is {date.toDateString()}
      </h4>
    </div>
  );
}

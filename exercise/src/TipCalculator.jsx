import { use, useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  const tip = bill * ((per1 + per2) / 2 / 100);
  function handleReset() {
    setBill(0);
    setPer1(0);
    setPer2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={per1} onSelect={setPer1}>
        how did u liked the service ?
      </SelectPercentage>
      <SelectPercentage percentage={per2} onSelect={setPer2}>
        how did your friend like the service?
      </SelectPercentage>
      {bill && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <p>
      <label>how much was the bill?</label>
      <input
        type="input"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </p>
  );
}
function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h1>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>reset</button>;
}

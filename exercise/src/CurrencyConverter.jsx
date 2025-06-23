// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmmount] = useState("");
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("USD");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function doConversion() {
        if (amount < 0) return;
        if (currency1 === currency2) {
          setResult(amount);
          return;
        }
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`
        );
        const data = await res.json();
        console.log(data);
        setResult(data["rates"][currency2]);
        setIsLoading(false);
      }
      doConversion();
    },
    [amount, currency1, currency2, result]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={currency1}
        onChange={(e) => setCurrency1(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={currency2}
        onChange={(e) => setCurrency2(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result > 0 ? `${result} ${currency2}` : "OUTPUT"}</p>
    </div>
  );
}

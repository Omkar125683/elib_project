import { useState } from 'react';
import calculateMortgage from '../utils/calculateMortgage';

export default function Mortgage() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(30);
  const monthlyPayment = calculateMortgage(amount, rate, years);

  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <input type="number" value={amount} onChange={e => setAmount((e.target.value))} />
      <input type="number" value={rate} onChange={e => setRate((e.target.value))} />
      <input type="number" value={years} onChange={e => setYears((e.target.value))} />
      <p>Estimated Monthly Payment: ${monthlyPayment}</p>
    </div>
  );
}
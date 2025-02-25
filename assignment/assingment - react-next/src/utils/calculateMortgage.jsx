export default function calculateMortgage(amount, rate, years) {
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    return ((amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))).toFixed(2);
  }
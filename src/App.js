import React, { useState } from "react";
import "./styles.css";

function FrizzBuzz() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => Math.max(1, prev - 1));
  }

  const displayText =
    count % 15 === 0
      ? "FizzBuzz"
      : count % 3 === 0
      ? "Fizz"
      : count % 5 === 0
      ? "Buzz"
      : count;

  return (
    <div>
      <h2>Fizz Buzz Game</h2>
      <p>{displayText}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

function App() {
  return <FrizzBuzz />;
}

export default App;

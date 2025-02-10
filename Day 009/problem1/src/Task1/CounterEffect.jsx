import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Radha ");

  useEffect(() => {
    document.title = count + "Radha";
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h1>{message}</h1>
      <button onClick={() => setMessage("Radha Rani")}>Change</button>
    </div>
  );
};

export default CounterEffect;

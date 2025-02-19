import React from "react";
import "./Counter.css";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1 className="counter-heading">{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)} className="counter-btn">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="counter-btn">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

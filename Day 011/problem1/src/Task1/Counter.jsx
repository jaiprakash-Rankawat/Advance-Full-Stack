import React from "react";
import { useState } from "react";

const Counter = ({ count, dispatch }) => {
  const [input, setInput] = useState(0);
  return (
    <div>
      {count}
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br />
      <hr />
      <div className="addbyValue">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button
          onClick={() => dispatch({ type: "incrementByValue", payload: input })}
        >
          Increment By Value
        </button>
        <button
          onClick={() => dispatch({ type: "decrementByValue", payload: input })}
        >
          Decrement By Value
        </button>
      </div>
    </div>
  );
};

export default Counter;

import React from "react";
import { useState } from "react";

const Example2 = () => {
  const [randomNumber, setRandomNumber] = useState(() => {
    return Math.floor(Math.random() * 100);
  });
  return (
    <div>
      <h1>Example2</h1>
      <h4>Random Number : {randomNumber}</h4>
      <button
        onClick={() => {
          setRandomNumber(Math.floor(Math.random() * 100));
        }}
      >
        Generate Random Number
      </button>
    </div>
  );
};

export default Example2;

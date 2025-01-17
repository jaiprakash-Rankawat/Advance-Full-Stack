import React from "react";
import { useState } from "react";
import SharingState from "./SharingState";
const BasicCalculator = () => {
  const [num1, setNum1] = useState(0);
  const handleIncrement = () => {
    setNum1(num1 + 1);
  };
  const handleDecrement = () => {
    setNum1(num1 - 1);
  };
  return (
    <div>
      <h1>Basic Calculator</h1>
      <span>{num1}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <hr />
      <div>Sharing data of state from one component to another</div>
      <SharingState
        count={num1}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
};

export default BasicCalculator;

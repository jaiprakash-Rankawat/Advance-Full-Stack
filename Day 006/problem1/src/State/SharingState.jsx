import React from "react";

const SharingState = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h1>Sharing State</h1>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default SharingState;

import React from "react";
import { useState } from "react";
import "./Toggle.css";
const Toggle = () => {
  const [color, setColor] = useState("white");
  const handleClick = () => {
    setColor(color === "white" ? "black" : "white");
  };
  return (
    <div className="change-color" style={{ backgroundColor: color }}>
      <button onClick={handleClick}>Switch</button>
      <div
        className="main"
        style={{
          color: color === "white" ? "black" : "white",
          fontSize: 66,
        }}
      >
        Radha Rani
      </div>
    </div>
  );
};

export default Toggle;

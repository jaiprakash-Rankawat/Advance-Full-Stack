import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const BasicEffect = () => {
  const [message, setMessage] = useState("Radha ");
  useEffect(() => {
    console.log(message);
  }, []);
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Radha Rani")}>Change</button>
    </div>
  );
};

export default BasicEffect;

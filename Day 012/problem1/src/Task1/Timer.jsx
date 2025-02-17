import React from "react";
import { useRef } from "react";
import { useState } from "react";
const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <div>
      <h1>Time : {count} Seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;

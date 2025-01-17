import React from "react";
import { useState } from "react";
const Example1 = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  return (
    <div>
      <h1>Example1</h1>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Example1;

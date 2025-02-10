import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const UseEffect3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // conditional statement inside useEffect is allowed
    if (count > 0) {
      console.log(count);
      document.title = count + " Radha";
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseEffect3;

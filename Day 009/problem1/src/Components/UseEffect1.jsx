import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  //   useEffect without dependencies list
  useEffect(() => {
    console.log(count);
  });

  // if there are multiple useState hooks in a component, useEffect will be called every times when a state updates or re-renders the component.

  const [anotherCount, setAnotherCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>

      <h1>{anotherCount}</h1>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>Add</button>
      <button onClick={() => setAnotherCount(anotherCount - 1)}>
        Subtract
      </button>
    </div>
  );
};

export default UseEffect1;

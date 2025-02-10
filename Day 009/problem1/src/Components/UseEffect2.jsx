import React, { useEffect } from "react";
import { useState } from "react";
const UseEffect2 = () => {
  const [count, setCount] = useState(0);

  //   useEffect with= empty dependencies list
  // it will be called only once when the component mounts
  useEffect(() => {
    console.log(count);
    document.title = "Radha" + count;
  }, []);

  // useEffect with dependencies list
  // it will be called every time when a state updates or re-renders the component.
  const [anotherCount, setAnotherCount] = useState(0);
  useEffect(() => {
    console.log(anotherCount);
    document.title = "krishna" + anotherCount;
  }, [anotherCount]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h1>{anotherCount}</h1>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>Add</button>
      <button onClick={() => setAnotherCount(anotherCount - 1)}>
        Subtract
      </button>
    </div>
  );
};

export default UseEffect2;

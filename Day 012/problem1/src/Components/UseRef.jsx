import React from "react";
import { useRef } from "react";
const UseRef = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "Radha Rani";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

export default UseRef;

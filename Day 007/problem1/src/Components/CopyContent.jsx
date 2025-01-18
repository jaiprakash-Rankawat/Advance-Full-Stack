import React from "react";
import { useState } from "react";
const CopyContent = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const handleClick = () => {
    navigator.clipboard.writeText(input);
    setMessage("Text Copied ");
    setTimeout(() => setMessage(""), 2000);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Write Something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
      <p>{message}</p>
    </div>
  );
};

export default CopyContent;

import React from "react";
import Portal from "./Portal";
import { useState } from "react";

const Copy = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setInput("");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Text ...."
      />
      <button onClick={handleClick}>Copy</button>
      <Portal copied={copied} />
    </div>
  );
};

export default Copy;

import React, { useState } from "react";

const WithoutKey = () => {
  const [input, setInput] = useState("Radha");
  const [name, setName] = useState("");
  const handleClick = () => {
    setInput(name);
    setName("");
  };
  return (
    <div>
      {/* when user click on the button the  text must be updated */}
      <p>{input}</p>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default WithoutKey;

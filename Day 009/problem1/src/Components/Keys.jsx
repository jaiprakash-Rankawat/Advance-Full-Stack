import React from "react";
import { useState } from "react";

const Keys = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
      <p>{sw ? "Dark" : "light"}</p>
      <input
        type="text"
        placeholder="Enter Text Here ..."
        key={sw ? "Dark" : "Light"}
      />
      <button onClick={() => setSw((s) => !s)}>Add</button>
      {/* Every time the button is clicked, React destroys and recreates the input field. */}
    </div>
  );
};

export default Keys;

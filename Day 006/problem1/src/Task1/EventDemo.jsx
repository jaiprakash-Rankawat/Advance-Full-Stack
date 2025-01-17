import React from "react";
import { useState } from "react";
const EventDemo = () => {
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState("Radha is a Powerful name");
  const [style, setStyle] = useState({});

  return (
    <div>
      <button onClick={() => setClicked(true)}>Click Me</button>
      <p>{clicked ? "Button Clicked" : ""}</p>

      {/* Text Copied */}
      <div>
        <p onCopy={() => setMessage("Text Copied")}>{message}</p>
      </div>

      {/* Mouse Move */}
      <div>
        <p
          onMouseMove={() => setStyle({ backgroundColor: "lightyellow" })}
          style={style}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        </p>
      </div>
    </div>
  );
};

export default EventDemo;

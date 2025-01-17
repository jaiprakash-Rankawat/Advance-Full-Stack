import React from "react";

const OnClick = () => {
  return (
    <div>
      <h1>On Click Event</h1>
      <button
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default OnClick;

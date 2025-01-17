import React from "react";

const OnCopy = () => {
  return (
    <div>
      <h1>On Copy Event</h1>
      <p
        onCopy={() => {
          alert("Do Not Copy My Content");
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod
        sapiente harum cumque illo eligendi, alias modi qui, porro neque fuga
        ducimus odio delectus facere at libero error inventore ab.
      </p>
    </div>
  );
};

export default OnCopy;

import React from "react";

const OnMouseMove = () => {
  return (
    <div>
      <h1>On Mouse Move Event</h1>
      <p
        onMouseMove={() => {
          console.log("Mouse Moved");
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        quibusdam accusantium commodi vero nihil odit, dolor, molestiae tenetur,
        ea ipsa dicta ratione. Nobis vel perferendis, sunt quaerat distinctio
        doloremque doloribus!
      </p>
    </div>
  );
};

export default OnMouseMove;

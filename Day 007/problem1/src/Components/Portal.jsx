import React from "react";
import { createPortal } from "react-dom";
const Portal = ({ copied }) => {
  return createPortal(
    <div>{copied && <h4>Text Copied</h4>}</div>,
    document.querySelector("#portal")
  );
};

export default Portal;

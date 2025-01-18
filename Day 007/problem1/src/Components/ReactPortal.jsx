import React from "react";
import { createPortal } from "react-dom";
const ReactPortal = () => {
  return createPortal(
    <h1>Content outside of Dom</h1>,
    document.querySelector("#Radha")
  );
};

export default ReactPortal;

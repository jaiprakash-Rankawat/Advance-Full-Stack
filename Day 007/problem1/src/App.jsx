import React from "react";
import ReactPortal from "./Components/ReactPortal";
import CopyContent from "./Components/CopyContent";
import Copy from "./Components/Copy";

const App = () => {
  return (
    <div>
      Calling from inside of Dom
      <ReactPortal />
      <CopyContent />
      <hr />
      <Copy />
    </div>
  );
};

export default App;

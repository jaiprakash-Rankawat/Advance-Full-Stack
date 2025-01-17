import React from "react";
import OnClick from "./Components/OnClick";
import OnCopy from "./Components/OnCopy";
import OnMouseMove from "./Components/OnMouseMove";
import BasicCalculator from "./State/BasicCalculator";
import ArrayUpdate from "./State/ArrayUpdate";
import ObjectUpdate from "./State/ObjectUpdate";
import Example1 from "./Passing Function to UseState/Example1";
import Example2 from "./Passing Function to UseState/Example2";
import EventDemo from "./Task1/EventDemo";

const App = () => {
  return (
    <div>
      <h1>React Event Handling Challenge</h1>
      <OnClick />
      <OnCopy />
      <OnMouseMove />

      {/* State Start from here */}
      <hr />
      <BasicCalculator />
      <hr />
      <ArrayUpdate />
      <hr />
      <ObjectUpdate />

      {/* Passing Function to UseState */}
      <hr />
      <Example1 />
      <hr />
      <Example2 />

      {/* Task 1 Starts from here */}
      <hr />
      <EventDemo />
    </div>
  );
};

export default App;

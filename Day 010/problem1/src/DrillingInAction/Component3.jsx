import React from "react";
import { data } from "../App";
const Component3 = () => {
  return (
    <div>
      calling From Component 3 <br />
      <data.Consumer>
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </data.Consumer>
    </div>
  );
};

export default Component3;

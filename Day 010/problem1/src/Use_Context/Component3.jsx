import React from "react";
import { useContext } from "react";
import { data1, data2 } from "../App";
const Component3 = () => {
  const name = useContext(data1);
  const age = useContext(data2);
  return (
    <div>
      Name : {name} <br />
      Age : {age}
    </div>
  );
};

export default Component3;

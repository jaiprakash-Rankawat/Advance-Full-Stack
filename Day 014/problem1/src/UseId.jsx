import React from "react";
import { useId } from "react";
const UseId = () => {
  const id = useId();
  return (
    <div>
      <form action="">
        <label htmlFor={`${id}-name`}>Name :</label>
        <input type="text" id={`${id}-name`} />
        <br />
        <label htmlFor={`${id}-email`}>Email :</label>
        <input type="email" id={`${id}-email`} />
      </form>
    </div>
  );
};

export default UseId;

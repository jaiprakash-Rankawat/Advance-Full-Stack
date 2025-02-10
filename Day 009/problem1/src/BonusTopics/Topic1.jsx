import React from "react";

const Topic1 = () => {
  const add = (a, b) => {
    return a + b;
  };

  const asyn = async (a, b) => {
    console.log(a + b);
  };
  return (
    <div>
      <div>
        <h1>synchronization</h1>
        {console.log("Starting")}
        {console.log(add(1, 2))}
        {console.log("Ending")}
        <p>Step by Step Execution of a program is called Synchronization</p>
      </div>
      <div>
        <h1>Asynchronous</h1>
        {console.log("Go..")}
        <button onClick={() => asyn(6, 9)}>Click</button>
        {console.log("finish")}
        <p>
          button can be clicked or cannot be clicked but it will be executed all
          commands
        </p>
        <p>
          command which takes time to execute are leave to complete and next
          command will be executed in Asynchronous
        </p>
      </div>
    </div>
  );
};

export default Topic1;

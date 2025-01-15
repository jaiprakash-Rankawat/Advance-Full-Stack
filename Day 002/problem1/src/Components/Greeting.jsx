import React from "react";
import { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  // here name is a variable with initial value ""
  // setName is a function that updates the value of name
  return (
    <div>
      <div className="input">
        <label htmlFor="Name">Name :</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="Name"
        />
        <button onClick={() => console.log("Hello " + name)}>Submit</button>
      </div>
      <div className="time">
        <h1>current time : {new Date().toLocaleTimeString()}</h1>
      </div>
    </div>
  );
};

export default Greeting;

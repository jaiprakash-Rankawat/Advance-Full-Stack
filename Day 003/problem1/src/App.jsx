import React from "react";
import User from "./Components/User";
import Products from "./Components/Products";
import Person from "./Task1/Person";
import Product from "./Task1/Product";
import ChildrenProps from "./Components/ChildrenProps";

const App = () => {
  return (
    <div>
      <User name="Radha" age={20} />
      <User name="Krishna" age={22} />

      <hr />

      {/* Props destructuring */}
      <Products name="Laptop" price="$1200" availability="In stock" />

      <hr />

      {/* Task1 Solution */}
      <h1 style={{ textAlign: "center" }}>Task1</h1>
      <Person name="Radha" age={20} />
      <Product name="Mobile" price="$600" />

      <hr />

      {/* Children Props */}
      <ChildrenProps>
        <h3>Calling from Children Props</h3>
      </ChildrenProps>
    </div>
  );
};

export default App;

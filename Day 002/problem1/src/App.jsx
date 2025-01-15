import React from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import JSXRules from "./Components/JSXRules";
import Greeting from "./Components/Greeting";
import ProductInfo from "./Components/ProductInfo";
import UserList from "./Components/UserList";
import ProductList from "./Components/ProductList";
const App = () => {
  return (
    <div>
      <WelcomeMessage />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <UserList />
      <ProductList />
    </div>
  );
};

export default App;

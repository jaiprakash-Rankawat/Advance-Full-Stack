import React from "react";
import Counter from "./Components/Counter";
import TodoList from "./Components/TodoList";
import Profile from "./Components/Profile";
import ShoppingList from "./Components/ShoppingList";

const App = () => {
  return (
    <div>
      <h1>Task 2</h1>
      <Counter />
      <hr />
      <TodoList />
      <hr />
      <Profile />
      <hr />
      <ShoppingList />
    </div>
  );
};

export default App;

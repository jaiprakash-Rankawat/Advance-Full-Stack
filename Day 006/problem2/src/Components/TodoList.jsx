import React from "react";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <label htmlFor="Todo">Todo :</label>
      <input
        type="text"
        name="Todo"
        id="Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => setTodos([...todos, todo])}>Add</button>

      {/* display using map function */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

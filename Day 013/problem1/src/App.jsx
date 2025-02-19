import React from "react";
import UseFetch from "./UseFetch";

const App = () => {
  const [data] = UseFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const UseEffect4 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetch Data</h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>👉 {item.title}</h1>
            <p>Body : {item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffect4;

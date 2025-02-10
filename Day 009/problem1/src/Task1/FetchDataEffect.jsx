import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FetchDataEffect = () => {
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
      <div>
        <div className="heading">Getting Only first Title</div>
        {data.length > 0 ? data[0].title : "Loading..."}
      </div>
    </div>
  );
};

export default FetchDataEffect;

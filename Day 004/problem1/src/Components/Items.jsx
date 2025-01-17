import React from "react";

const Items = ({ product }) => {
  return (
    <div>
      <h1>Product List</h1>
      {product.length > 0 && <h2>Total Items : {product.length}</h2>}
      <ul>
        {product.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Items;

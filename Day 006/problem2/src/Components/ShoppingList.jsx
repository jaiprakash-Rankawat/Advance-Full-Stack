import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [product, setproduct] = useState("");
  const [Quantity, setQuentity] = useState("");
  const ProductsObject = {
    product,
    Quantity: parseInt(Quantity),
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <input
        type="text"
        placeholder="Add an item"
        onChange={(e) => setproduct(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        onChange={(e) => setQuentity(e.target.value)}
      />
      <button onClick={() => setItems([...items, ProductsObject])}>Add</button>
      <ul>
        {items.map((item, index) => (
          <ul key={index}>
            <li>
              Name : {item.product}, Quantity :{item.Quantity}
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

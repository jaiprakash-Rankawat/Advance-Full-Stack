import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];
  return (
    <div>
      <h1>ProductList</h1>
      {products.map((item) => (
        <ul key={item.id}>
          <li>Name :{item.name}</li>
          <li>Price :{item.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;

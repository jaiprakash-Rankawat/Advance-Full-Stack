import React from "react";

const Products = ({ name, price, availability }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Name : {name}</p>
      <p>Price : {price}</p>
      <p>Availability : {availability}</p>
    </div>
  );
};

export default Products;

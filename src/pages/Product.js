import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Product = () => {
  return (
    <>
      <h1>Product</h1>
      <Link to="/">Go to Home</Link>
      <ul>
        {PRODUCTS.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={`/product/${prod.id}`}>{prod.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Product;

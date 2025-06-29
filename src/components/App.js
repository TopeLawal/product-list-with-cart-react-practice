import allProducts from "../data.json";
import ProductList from "./ProductList";
import CartList from "./CartList";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState(allProducts);

  return (
    <div className="container">
      <div className="product-section">
        <h1>Dessert</h1>
        <ProductList allProducts={products} />
      </div>
      <CartList allProducts={products} />
    </div>
  );
}

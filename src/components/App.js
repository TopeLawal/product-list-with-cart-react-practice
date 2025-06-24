import Product from "./Product";
import Cart from "./Cart";

export default function App() {
  return (
    <div className="container">
      <div className="product-section">
        <h1>Dessert</h1>
        <Product />
      </div>
      <Cart />
    </div>
  );
}

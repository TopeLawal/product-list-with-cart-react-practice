import products from "../data.json";
import CartList from "./CartList";
import Order from "./Order";
export default function Cart() {
  return (
    <div className="cart-section">
      <h2>Your Cart (0)</h2>
      {/*  <div className="cart-items-empty">
        <img src="./assets/images/illustration-empty-cart.svg" alt="empty" />
        <p>Your add items will appear here</p>
      </div> */}

      <ul className="cart-list-container">
        {products.map((product) => (
          <CartList name={product.name} price={product.price} />
        ))}
      </ul>

      <Order />
    </div>
  );
}

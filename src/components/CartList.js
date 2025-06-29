import Cart from "./Cart";
import Order from "./Order";
export default function CartList(props) {
  return (
    <div className="cart-section">
      <h2>Your Cart (0)</h2>
      {/*  <div className="cart-items-empty">
        <img src="./assets/images/illustration-empty-cart.svg" alt="empty" />
        <p>Your add items will appear here</p>
      </div> */}

      <ul className="cart-list-container">
        {props.allProducts.map((product) => (
          <Cart name={product.name} price={product.price} key={product.id} />
        ))}
      </ul>

      <Order />
    </div>
  );
}

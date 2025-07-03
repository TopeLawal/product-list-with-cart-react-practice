import Cart from "./Cart";
import Order from "./Order";
export default function CartList({
  cartItems,
  onHandleRemoveItem,
  totalOrderPrice,
  onShowModal,
}) {
  const totalItemQuantity = cartItems.reduce(
    (acc, items) => acc + items.quantity,
    0
  );

  return (
    <div className="cart-section">
      <h2>Your Cart ({totalItemQuantity})</h2>
      {!totalItemQuantity ? (
        <div className="cart-items-empty">
          <img src="./assets/images/illustration-empty-cart.svg" alt="empty" />
          <p>Your add items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="cart-list-container">
            {cartItems.map((cartItem) => (
              <Cart
                key={cartItem.id}
                cartItem={cartItem}
                onHandleRemoveItem={onHandleRemoveItem}
              />
            ))}
          </ul>

          <Order totalOrderPrice={totalOrderPrice} onShowModal={onShowModal} />
        </>
      )}
    </div>
  );
}

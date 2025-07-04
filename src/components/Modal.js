import OrderTotal from "./OrderTotal";

export default function Modal({ cartItems, totalOrderPrice, onReset }) {
  return (
    <div className="modal">
      <div className="confirmed-order">
        <img src="../assets/images/icon-order-confirmed.svg" />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <div className="ordered-item-container">
          {cartItems.map((item) => {
            return (
              <div className="ordered-item">
                <img src={item.thumbnail} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <div className="quantity-container">
                    <p className="order-quantity">{item.quantity}x</p>
                    <p className="order-unit-price">
                      @${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="order-price">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            );
          })}
          <OrderTotal totalOrderPrice={totalOrderPrice} />
        </div>
        <button className="order-btn" onClick={onReset}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

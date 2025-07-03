import OrderButton from "./OrderButton";
import OrderTotal from "./OrderTotal";

export default function Modal({ cartItems, totalOrderPrice }) {
  return (
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
                  <p className="order-unit-price">@${item.price.toFixed(2)}</p>
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
      <OrderButton>Start New Order</OrderButton>
    </div>
  );
}

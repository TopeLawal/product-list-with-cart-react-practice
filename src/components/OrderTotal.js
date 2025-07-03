export default function OrderTotal({ totalOrderPrice }) {
  return (
    <div className="order-container">
      <p>Order Total</p>
      <h2>${totalOrderPrice.toFixed(2)}</h2>
    </div>
  );
}

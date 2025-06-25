export default function Order() {
  return (
    <>
      <div className="order-container">
        <p>Order Total</p>
        <h2>$46.50</h2>
      </div>
      <div className="carbon-neutral">
        <img
          src="../assets/images/icon-carbon-neutral.svg"
          alt="carbon neutral"
        />
        <p>
          This is a <span className="bold">carbon-neutral</span> delivery
        </p>
      </div>

      <button className="confirm-order">Confirm Order</button>
    </>
  );
}

import OrderTotal from "./OrderTotal";

export default function Order({ totalOrderPrice, onShowModal }) {
  return (
    <>
      <OrderTotal totalOrderPrice={totalOrderPrice} />
      <div className="carbon-neutral">
        <img
          src="../assets/images/icon-carbon-neutral.svg"
          alt="carbon neutral"
        />
        <p>
          This is a <span className="bold">carbon-neutral</span> delivery
        </p>
      </div>

      <button className="order-btn" onClick={onShowModal}>
        Confirm Order
      </button>
    </>
  );
}

export default function OrderButton({ children, onShowModal }) {
  return (
    <button className="order-btn" onClick={onShowModal}>
      {children}
    </button>
  );
}

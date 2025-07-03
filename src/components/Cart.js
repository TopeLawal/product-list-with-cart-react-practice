export default function Cart({ cartItem, onHandleRemoveItem }) {
  return (
    <li className="cart-item-container">
      <div>
        <h4>{cartItem.name}</h4>
        <div className="price-container">
          <p className="quantity">{cartItem.quantity}x</p>
          <p className="unit-price">@${cartItem.price.toFixed(2)}</p>
          <p className="total-price">
            @${(cartItem.quantity * cartItem.price).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="remove-item"
        onClick={() => onHandleRemoveItem(cartItem.id)}
      >
        <img src="./assets/images/icon-remove-item.svg" alt="remove-item" />
      </button>
    </li>
  );
}

export default function CartList(props) {
  return (
    <li className="cart-item-container">
      <div>
        <h4>{props.name}</h4>
        <div className="price-container">
          <p className="quantity">1x</p>
          <p className="unit-price">@${props.price}</p>
          <p className="total-price"> @$5.50</p>
        </div>
      </div>
      <button className="remove-item">
        <img src="./assets/images/icon-remove-item.svg" alt="remove-item" />
      </button>
    </li>
  );
}

import { useState } from "react";

export default function Product(props) {
  const [itemSelected, setItemSelected] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  function handleAddToCart() {
    setItemSelected(true);
  }

  function handleDecrement(productId) {
    if (productId === props.id) {
      setItemQuantity((quantity) => {
        if (quantity === 0) {
          setItemQuantity(0);
          setItemSelected(false);
        }
        return quantity - 1;
      });
    }
  }

  function handleIncrement(productId) {
    if (productId === props.id) {
      setItemQuantity((quantity) => quantity + 1);
    }
  }
  return (
    <li className="product-card">
      <div className="product-showcase">
        <img
          className={itemSelected ? "selected" : ""}
          src={props.image}
          alt={props.name}
        />
        {itemSelected ? (
          <button className="set-quantity">
            <span onClick={() => handleDecrement(props.id)}>
              <img
                src="../assets/images/icon-decrement-quantity.svg"
                alt="decrement"
              />
            </span>
            <p>{itemQuantity}</p>
            <span onClick={() => handleIncrement(props.id)}>
              <img
                src="../assets/images/icon-increment-quantity.svg"
                alt="increment"
              />
            </span>
          </button>
        ) : (
          <button className="add-to-cart" onClick={handleAddToCart}>
            <span>
              <img
                src="./assets/images/icon-add-to-cart.svg"
                alt="cart"
                className="cart"
              />
            </span>
            Add to Cart
          </button>
        )}
      </div>
      <div className="desc">
        <p className="category">{props.category}</p>
        <h4>{props.name}</h4>
        <p className="price">${props.price}</p>
      </div>
    </li>
  );
}

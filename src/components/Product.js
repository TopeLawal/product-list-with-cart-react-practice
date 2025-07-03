import { useState } from "react";

export default function Product({
  product,
  cartItems,
  onHandleAddToCart,
  onHandleDecrement,
  onHandleIncrement,
  isProductInCart,
}) {
  function getCartItem(productId) {
    return cartItems.find((item) => item.id === productId);
  }

  return (
    <li className="product-card">
      <div className="product-showcase">
        <img
          className={isProductInCart(product.id) ? "selected" : ""}
          src={product.image.desktop}
          alt={product.name}
        />
        {isProductInCart(product.id) ? (
          <button className="set-quantity">
            <span onClick={() => onHandleDecrement(product.id)}>
              <img
                src="../assets/images/icon-decrement-quantity.svg"
                alt="decrement"
              />
            </span>
            <p>{getCartItem(product.id).quantity}</p>
            <span onClick={() => onHandleIncrement(product.id)}>
              <img
                src="../assets/images/icon-increment-quantity.svg"
                alt="increment"
              />
            </span>
          </button>
        ) : (
          <button
            className="add-to-cart"
            onClick={() => onHandleAddToCart(product)}
          >
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
        <p className="category">{product.category}</p>
        <h4>{product.name}</h4>
        <p className="price">${product.price}</p>
      </div>
    </li>
  );
}

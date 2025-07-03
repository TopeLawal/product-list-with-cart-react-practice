import allProducts from "../data.json";
import ProductList from "./ProductList";
import CartList from "./CartList";
import { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [products, setProducts] = useState(allProducts);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const totalOrderPrice = cartItems.reduce(
    (acc, items) => acc + items.quantity * items.price,
    0
  );

  function handleAddToCart(product) {
    setCartItems([
      ...cartItems,
      {
        id: product.id,
        name: product.name,
        desktop: product.image.desktop,
        thumbnail: product.image.thumbnail,
        category: product.category,
        price: product.price,
        quantity: 1,
      },
    ]);
  }

  function handleDecrement(productId) {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  }

  function handleIncrement(productId) {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  }

  function handleRemoveItem(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function handleShowModal() {
    setShowModal(true);
  }

  function isProductInCart(productId) {
    return cartItems.findIndex((items) => items.id === productId) !== -1;
  }

  return (
    <div className="container">
      <div className="product-section">
        <h1>Dessert</h1>
        <ProductList
          allProducts={products}
          cartItems={cartItems}
          onHandleAddToCart={handleAddToCart}
          onHandleDecrement={handleDecrement}
          onHandleIncrement={handleIncrement}
          isProductInCart={isProductInCart}
        />
      </div>
      <CartList
        allProducts={products}
        cartItems={cartItems}
        onHandleRemoveItem={handleRemoveItem}
        totalOrderPrice={totalOrderPrice}
        onShowModal={handleShowModal}
      />
      {showModal && (
        <Modal cartItems={cartItems} totalOrderPrice={totalOrderPrice} />
      )}
    </div>
  );
}

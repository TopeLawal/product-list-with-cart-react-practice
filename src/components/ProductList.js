import Product from "./Product";

export default function ProductList({
  allProducts,
  cartItems,
  onHandleAddToCart,
  onHandleDecrement,
  onHandleIncrement,
  isProductInCart,
}) {
  return (
    <ul className="product-list-container">
      {allProducts.map((product) => (
        <Product
          product={product}
          key={product.id}
          cartItems={cartItems}
          onHandleAddToCart={onHandleAddToCart}
          onHandleDecrement={onHandleDecrement}
          onHandleIncrement={onHandleIncrement}
          isProductInCart={isProductInCart}
        />
      ))}
    </ul>
  );
}

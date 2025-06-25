import products from "../data.json";
import ProductList from "./ProductList";

export default function Product() {
  return (
    <ul className="product-list-container">
      {products.map((product) => (
        <ProductList
          image={product.image.desktop}
          name={product.name}
          category={product.category}
          price={product.price}
        />
      ))}
    </ul>
  );
}

import Product from "./Product";

export default function ProductList(props) {
  return (
    <ul className="product-list-container">
      {props.allProducts.map((product) => (
        <Product
          image={product.image.desktop}
          name={product.name}
          category={product.category}
          price={product.price}
          id={product.id}
          key={product.id}
        />
      ))}
    </ul>
  );
}

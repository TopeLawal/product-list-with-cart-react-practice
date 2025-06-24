import data from "../data.json";

export default function Product() {
  return (
    <ul className="product-list-container">
      {data.map((data) => (
        <ProductList
          image={data.image.desktop}
          name={data.name}
          category={data.category}
          price={data.price}
        />
      ))}
    </ul>
  );
}

function ProductList(props) {
  return (
    <li className="product-card">
      <div className="product-showcase">
        <img src={props.image} alt={props.name} />
        <button className="add-to-cart">
          <span>
            <img
              src="./assets/images/icon-add-to-cart.svg"
              alt="cart"
              className="cart"
            />
          </span>
          Add to Cart
        </button>
      </div>
      <div className="desc">
        <p className="category">{props.category}</p>
        <h4>{props.name}</h4>
        <p className="price">${props.price}</p>
      </div>
    </li>
  );
}

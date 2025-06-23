export default function Desserts() {
  return (
    <>
      <div>
        <img
          src="./assets/images/image-waffle-mobile.jpg"
          alt="Waffle with Berries"
        />
        <button className="add-to-cart">
          <span>
            <img src="/public/assets/images/icon-add-to-cart.svg" />
          </span>
          Add to Cart
        </button>
      </div>
      <div className="desc">
        <p className="category">Waffle</p>
        <h4>Waffle with Berries</h4>
        <p className="price">$6.50</p>
      </div>
    </>
  );
}

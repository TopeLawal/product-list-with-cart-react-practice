import Desserts from "./Desserts";
import Cart from "./Cart";
export default function App() {
  return (
    <div className="container">
      <div className="dessert-container">
        <h1>Dessert</h1>
        <Desserts />
      </div>
      <Cart />
    </div>
  );
}

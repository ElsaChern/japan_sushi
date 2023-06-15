import "./Cart.scss";

const Cart = () => {
  const cartItems = (
    <ul className="cart-items">
      {[].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className="total">
        <span>Итого</span>
        <span>6999</span>
      </div>
      <div className="actions">
        <button className="button--alt">Закрыть</button>
        <button className="button">оформить</button>
      </div>
    </div>
  );
};

export default Cart;

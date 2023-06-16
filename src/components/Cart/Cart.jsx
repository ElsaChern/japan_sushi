import Modal from "../UI/Modal";
import "./Cart.scss";

const Cart = ({ hideCart }) => {
  const cartItems = (
    <ul className="cart-items">
      {[].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className="total">
        <span>Итого</span>
        <span>6999</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={hideCart}>
          Закрыть
        </button>
        <button className="button">Оформить</button>
      </div>
    </Modal>
  );
};

export default Cart;

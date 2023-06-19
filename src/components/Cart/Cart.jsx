import { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.scss";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ hideCart }) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `${cartContext.totalAmount.toFixed(2)} p.`;
  const hasItem = cartContext.items.length > 0;

  const removeCartItem = (item) => {};
  const addCartItem = (id) => {};

  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItem}
          onAdd={addCartItem}
        />
      ))}
    </ul>
  );
  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className="total">
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={hideCart}>
          Закрыть
        </button>
        {hasItem && <button className="button">Оформить</button>}
      </div>
    </Modal>
  );
};

export default Cart;

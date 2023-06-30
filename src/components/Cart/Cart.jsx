import { useContext, useState } from "react";
import "./Cart.scss";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOder";

const Cart = ({ hideCart }) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `${Math.abs(cartContext.totalAmount)} ₽`;
  const hasItem = cartContext.items.length > 0;

  const [isSubmitAvaliable, setIsSubmitAvaliable] = useState(false);

  const removeCartItem = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const submitHandler = () => {
    setIsSubmitAvaliable(true);
  };

  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItem.bind(null, item)}
          onRemove={removeCartItem.bind(null, item.id)}
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
      {isSubmitAvaliable && <SubmitOrder />}
      {!isSubmitAvaliable && (
        <div className="actions">
          <button className="button--alt" onClick={hideCart}>
            Закрыть
          </button>
          {hasItem && (
            <button className="button" onClick={submitHandler}>
              Оформить
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;

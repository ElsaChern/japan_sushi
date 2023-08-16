import "./CartItem.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = ({ price, name, amount, onRemove, onAdd }) => {
  const itemPrice = `${price} ₽`;

  return (
    <li className="cart-item">
      <div>
        <h2>{name}</h2>
        <div className="summary">
          <span className="price">{itemPrice}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="action">
        <button onClick={onRemove}>
          <AiOutlineMinus />
        </button>
        <button onClick={onAdd}>
          <AiOutlinePlus />
        </button>
      </div>
    </li>
  );
};

export default CartItem;

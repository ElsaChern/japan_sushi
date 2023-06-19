import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.scss";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ showCart }) => {
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className="button" onClick={showCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className="badge">{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;

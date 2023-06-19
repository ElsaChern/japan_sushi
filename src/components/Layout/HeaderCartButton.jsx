import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.scss";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ showCart }) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const bumpButton = `${isButtonAnimated ? "button bump" : "button"}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);
    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={bumpButton} onClick={showCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className="badge">{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;

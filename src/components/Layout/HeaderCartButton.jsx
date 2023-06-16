import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.scss";

const HeaderCartButton = ({ showCart }) => {
  return (
    <button className="button" onClick={showCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className="badge">1</span>
    </button>
  );
};

export default HeaderCartButton;

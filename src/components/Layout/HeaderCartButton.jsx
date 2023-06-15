import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.scss";

const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className="badge">1</span>
    </button>
  );
};

export default HeaderCartButton;

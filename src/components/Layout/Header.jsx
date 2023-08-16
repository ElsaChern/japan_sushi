import "./Header.scss";
import HeaderCartButton from "./HeaderCartButton";
import headerIcon from "../../img/Sushi_icon.png";
import HeaderImg from "./HeaderImg";

const Header = ({ showCart }) => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={headerIcon} alt="Логотип"></img>
          <h1 className="header-title">SushiYam</h1>
        </div>
        <HeaderCartButton showCart={showCart} />
      </div>
      <HeaderImg />
    </>
  );
};

export default Header;

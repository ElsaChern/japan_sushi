import SushiImage from "../../img/bg.jpeg";
import "./Header.scss";
import HeaderCartButton from "./HeaderCartButton";
import headerIcon from "../../img/Sushi_icon.png";

const Header = ({ showCart }) => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={headerIcon} alt="Логотип"></img>
          <h1>SushiYam</h1>
        </div>
        <HeaderCartButton showCart={showCart} />
      </header>
      <div className="main-image">
        <img src={SushiImage} alt="Sushi" />
      </div>
    </>
  );
};

export default Header;

import SushiImage from "../../img/sushi.jpg";
import "./Header.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ showCart }) => {
  return (
    <>
      <header className="header">
        <h1>Japan Sushi</h1>
        <HeaderCartButton showCart={showCart} />
      </header>
      <div className="main-image">
        <img src={SushiImage} alt="Sushi" />
      </div>
    </>
  );
};

export default Header;

import SushiImage from "../../img/sushi.jpg";

const Header = () => {
  return (
    <>
      <header>
        <h1>Japan Sushi</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={SushiImage} alt="Sushi" />
      </div>
    </>
  );
};

export default Header;

import SushiImage from "../../img/bg.jpeg";
import "./HeaderImg.scss";

const HeaderImg = () => {
  return (
    <div className="main-image">
      <img src={SushiImage} alt="Sushi" />
    </div>
  );
};

export default HeaderImg;

import { useContext } from "react";
import "./MealItem.scss";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const formattedPrice = `${props.price} ₽`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      weight: props.weight,
      img: props.img,
      price: props.price,
    });
  };

  return (
    <div className="meal">
      <div className="wrapper">
        <h3>{props.name}</h3>
        <div className="imgContainer">
          <img src={props.img} alt="Изображение" />
        </div>
        <div className="weight">{props.weight}</div>
        <div className="description">{props.description}</div>
      </div>
      <div className="price">{formattedPrice}</div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </div>
  );
};

export default MealItem;

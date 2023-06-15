import "./MealItem.scss";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const formattedPrice = `${props.price.toFixed(2)} p.`;

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;

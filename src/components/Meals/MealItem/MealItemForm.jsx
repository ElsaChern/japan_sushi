import Input from "../../UI/Input";
import "./MealItemForm.scss";

const MealItemForm = (props) => {
  return (
    <form className="form">
      <Input
        label="Количество"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>В корзину</button>
    </form>
  );
};

export default MealItemForm;

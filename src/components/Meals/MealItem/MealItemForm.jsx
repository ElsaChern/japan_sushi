import { useRef, useState } from "react";
import Input from "../../UI/Input";
import "./MealItemForm.scss";

const MealItemForm = (props) => {
  const [isAmoundValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!isAmoundValid && (
        <p style={{ color: "red" }}>Введите число от 1 до 10</p>
      )}
    </form>
  );
};

export default MealItemForm;

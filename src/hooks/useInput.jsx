import { useState } from "react";

const useInput = (validateValueFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);

  const isValueValid = validateValueFunc(enteredValue);
  const isInputInvalid = !isValueValid && wasInputTouched;

  const InputChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const InputLostFocus = () => {
    setWasInputTouched(true);
  };

  const clearInputValue = () => {
    setEnteredValue("");
    setWasInputTouched(false);
  };

  return {
    value: enteredValue,
    hasError: isInputInvalid,
    isValueValid,
    InputChange,
    InputLostFocus,
    clearInputValue,
  };
};

export default useInput;

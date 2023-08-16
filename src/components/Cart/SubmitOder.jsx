import "./SubmitOder.scss";
import useInput from "../../hooks/useInput";

const SubmitOder = ({ onSubmit }) => {
  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValueValid: isNameValid,
    InputChange: nameInputChange,
    InputLostFocus: nameInputLostFocus,
    clearInputValue: clearNameInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredPhone,
    hasError: hasPhoneInputError,
    isValueValid: isPhoneValid,
    InputChange: phoneInputChange,
    InputLostFocus: phoneInputLostFocus,
    clearInputValue: clearPhoneInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredCity,
    hasError: hasCityInputError,
    isValueValid: isCityValid,
    InputChange: cityInputChange,
    InputLostFocus: cityInputLostFocus,
    clearInputValue: clearCityInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredAddress,
    hasError: hasAddressInputError,
    isValueValid: isAddressValid,
    InputChange: addressInputChange,
    InputLostFocus: addressInputLostFocus,
    clearInputValue: clearAddressInput,
  } = useInput((val) => val.trim() !== "");

  let formValid = false;
  if (isNameValid && isPhoneValid && isCityValid && isAddressValid) {
    formValid = true;
  }

  const confirmOder = (e) => {
    e.preventDefault();
    if (!isNameValid && !isPhoneValid && !isCityValid && !isAddressValid) {
      return;
    }
    onSubmit({
      name: enteredName,
      phone: enteredPhone,
      city: enteredCity,
      address: enteredAddress,
    });

    clearNameInput();
    clearPhoneInput();
    clearCityInput();
    clearAddressInput();
  };

  return (
    <>
      <form className="submitForm" onSubmit={confirmOder}>
        <div className={`${"control"} ${hasNameInputError ? "invalid" : ""}`}>
          <label>Имя</label>
          <input
            type="text"
            name="name"
            id="name"
            value={enteredName}
            onChange={nameInputChange}
            onBlur={nameInputLostFocus}
          />
        </div>
        <div className={`${"control"} ${hasPhoneInputError ? "invalid" : ""}`}>
          <label>Номер телефона</label>
          <input
            type="tel"
            maxLength="16"
            placeholder="89876543211"
            name="phone"
            id="phone"
            value={enteredPhone}
            onChange={phoneInputChange}
            onBlur={phoneInputLostFocus}
          />
        </div>
        <div className={`${"control"} ${hasCityInputError ? "invalid" : ""}`}>
          <label>Город</label>
          <input
            type="text"
            name="city"
            id="city"
            value={enteredCity}
            onChange={cityInputChange}
            onBlur={cityInputLostFocus}
          />
        </div>
        <div
          className={`${"control"} ${hasAddressInputError ? "invalid" : ""}`}
        >
          <label>Адрес доставки</label>
          <input
            type="text"
            name="address"
            id="address"
            value={enteredAddress}
            onChange={addressInputChange}
            onBlur={addressInputLostFocus}
          />
        </div>
        <div className="submitAction">
          <button className="submit" disabled={!formValid}>
            Оформить заказ
          </button>
        </div>
      </form>
    </>
  );
};

export default SubmitOder;

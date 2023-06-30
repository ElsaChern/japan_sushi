import "./SubmitOder.scss";

const SubmitOder = () => {
  const confirmOder = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="submitForm" onSubmit={confirmOder}>
        <div className="control">
          <label>Имя</label>
          <input type="text" id="name"></input>
        </div>
        <div className="control">
          <label>Номер телефона</label>
          <input type="text" id="phone"></input>
        </div>
        <div className="control">
          <label>Город</label>
          <input type="text" id="city"></input>
        </div>
        <div className="control">
          <label>Адрес доставки</label>
          <input type="text" id="address"></input>
        </div>
        <div className="submitAction">
          <button className="submit">Оформить заказ</button>
        </div>
      </form>
    </>
  );
};

export default SubmitOder;

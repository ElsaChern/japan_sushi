import { useContext, useState } from "react";
import "./Cart.scss";
import loader from "../../img/loader.gif";
import happySending from "../../img/happySending.jpeg";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOder";

const Cart = ({ hideCart }) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `${Math.abs(cartContext.totalAmount)} ₽`;
  const hasItem = cartContext.items.length > 0;

  const [isSubmitAvaliable, setIsSubmitAvaliable] = useState(false);
  const [isDataSubmiting, setIsDataSubmiting] = useState(false);
  const [wasDataSended, setWasDataSended] = useState(false);

  const removeCartItem = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const submitHandler = () => {
    setIsSubmitAvaliable(true);
  };

  const submitOrder = async (data) => {
    setIsDataSubmiting(true);

    await fetch(
      "https://aqueous-ray-379313-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          data: data,
          orderedMeals: cartContext.items,
        }),
      },
    );
    setIsDataSubmiting(false);
    setWasDataSended(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItem.bind(null, item)}
          onRemove={removeCartItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartMainContent = (
    <>
      {cartItems}
      <div className="total">
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitAvaliable && <SubmitOrder onSubmit={submitOrder} />}
      {!isSubmitAvaliable && (
        <div className="actions">
          <button className="button--alt" onClick={hideCart}>
            Закрыть
          </button>
          {hasItem && (
            <button className="button" onClick={submitHandler}>
              Оформить
            </button>
          )}
        </div>
      )}
    </>
  );

  const submitingDataContent = (
    <div className="loader">
      <img src={loader} alt="Загрузка"></img>
    </div>
  );

  const sendedDataContent = (
    <>
      <p className="successfulSending">Ваш заказ успешно отправлен.</p>
      <p className="successfulComment">
        Ожидайте звонка от оператора в течение пары минут для его подтверждения
      </p>
      <div className="successfulWrapper">
        <img src={happySending} alt="Успешно отправлено"></img>
      </div>
      <p className="successfulSending">Приятного аппетита!</p>
    </>
  );

  return (
    <Modal hideCart={hideCart}>
      {!isDataSubmiting && !wasDataSended && cartMainContent}
      {isDataSubmiting && submitingDataContent}
      {wasDataSended && sendedDataContent}
    </Modal>
  );
};

export default Cart;

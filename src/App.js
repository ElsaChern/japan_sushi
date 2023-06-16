import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsVisiable, setCartISVisiable] = useState(false);

  const showCartHandler = () => {
    setCartISVisiable(true);
  };

  const hideCartHandler = () => {
    setCartISVisiable(false);
  };

  return (
    <>
      {cartIsVisiable && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

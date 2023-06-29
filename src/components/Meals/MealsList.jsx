import "./MealsList.scss";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import loader from "../../img/loader.gif";
import errorImg from "../../img/error.jpeg";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://aqueous-ray-379313-default-rtdb.firebaseio.com/meals.json/",
      );

      if (!response.ok) {
        throw new Error("Что-то пошло не так");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          img: responseData[key].img,
          name: responseData[key].name,
          description: responseData[key].description,
          weight: responseData[key].weight,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((e) => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <img src={loader} alt="Загрузка"></img>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <img src={errorImg} alt="Ошибка"></img>
      </div>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      weight={meal.weight}
      img={meal.img}
      price={meal.price}
    />
  ));
  return <div className="mealsList">{mealsList}</div>;
};

export default MealsList;

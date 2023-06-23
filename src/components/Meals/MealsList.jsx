import { DUMMY_MEALS } from "../../store/Meals";
import Card from "../UI/Card";
import "./MealsList.scss";
import MealItem from "./MealItem/MealItem";

const MealsList = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;

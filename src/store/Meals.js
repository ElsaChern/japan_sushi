import { v4 as uuidv4 } from "uuid";
import Ivase from "../img/9dd9a760-4858-486a-8ec4-afd200aac19a.jpeg";
import Arizona from "../img/Arizona.jpeg";
import Vegan from "../img/Vegan.jpeg";
import Losos from "../img/Vegan.jpeg";
import Sensay from "../img/Sensay.jpeg";
import Mioko from "../img/Mioko.jpeg";
import Arigato from "../img/Arigato.jpeg";

export const DUMMY_MEALS = [
  {
    id: uuidv4(),
    name: 'Ролл "Ивассэ" ',
    description:
      "Креветка тигровая, курица, салат, сыр сливочный, соус спайс, рис, маменори",
    weight: "240 г",
    img: Ivase,
    price: 355,
  },
  {
    id: uuidv4(),
    name: 'Ролл "Аризона" ',
    description:
      "Лосось, помело, сыр сливочный, соус гуакамоле, соус васаби, соус манго чили, темпура, лук зеленый, рис, спринг тесто",
    weight: "230 г",
    img: Arizona,
    price: 330,
  },
  {
    id: uuidv4(),
    name: 'Ролл "Веган" ',
    description:
      "Авокадо, морковь, фасоль стручковая, перец печеный, салат, соус манго чили, соус гуакамоле, хлопья миндаля, воздушный рис, кунжут, рис, маменори",
    weight: "230 г",
    img: Vegan,
    price: 310,
  },
  {
    id: uuidv4(),
    name: 'Ролл "Гриль лосось" ',
    description:
      "Лосось, авокадо, имитация краба, соус спайс, соус терияки, соус гуакамоле, лук зеленый, рис, нори",
    weight: "260 г",
    img: Losos,
    price: 499,
  },
  {
    id: uuidv4(),
    name: 'Ролл "Сэнсэй" ',
    description:
      "Угорь, авокадо, сыр сливочный, омлет тамаго, лук зеленый, кунжут, соус спайс, соус терияки, рис, нори",
    weight: "290 г",
    img: Sensay,
    price: 699,
  },
  {
    id: uuidv4(),
    name: 'Ролл "Миоко" ',
    description:
      "Курица, авокадо, фасоль стручковая, лук зеленый, воздушный рис, соус терияки, соус спайс, масаго, кунжут, рис, нори",
    weight: "240 г",
    img: Mioko,
    price: 299,
  },
  {
    id: uuidv4(),
    name: 'Ролл "Аригато" ',
    description:
      "Морской гребешок, авокадо, помело, масаго, лук зеленый, соус васаби, соус спайс, рис, маменори",
    weight: "200 г",
    img: Arigato,
    price: 395,
  },
];

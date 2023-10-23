import Card from "../card/Card";
import cl from "./Cards.module.css";
const Cards = ({ cards }) => {
  return (
    <div className={cl.card__grid}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
export default Cards;

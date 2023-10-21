import cl from "./Cards.module.css";
const Cards = ({ cards }) => {
  return (
    <div className={cl.card__grid}>
      {cards.map((card) => (
        <div key={card.id} className={cl.card}>
          <div>
            <img src={card.src} className={cl.front} alt="card-front" />
            <img src="../img/cover.jpg" className={cl.back} alt="card-back" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;

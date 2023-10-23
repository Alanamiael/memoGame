import cl from "../cards/Cards.module.css";
const Card = ({ card }) => {
  return (
    <div className={cl.card}>
      <img src={card.src} className={cl.front} alt="card-front" />
      <img src="../img/cover.jpg" className={cl.back} alt="card-back" />
    </div>
  );
};
export default Card;

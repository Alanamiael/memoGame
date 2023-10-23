import cl from "../cards/Cards.module.css";
const Card = ({ card, handleChoice }) => {
  //   const handleClick = () => {
  //     handleChoice(card);
  //   };

  return (
    <div className={cl.card}>
      <img src={card.src} className={cl.front} alt="card-front" />
      <img
        src="../img/cover.jpg"
        className={cl.back}
        alt="card-back"
        // onClick={handleClick}
      />
    </div>
  );
};
export default Card;

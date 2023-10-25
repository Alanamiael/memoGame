import cl from "./Card.module.scss";
import CoverImg from "../../../public/img/cover.jpg";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={cl.card}>
      <div className={flipped ? cl.flipped : ""}>
        <img src={card.src} className={cl.front} alt="card-front" />
        <img
          src={CoverImg}
          className={cl.back}
          alt="card-back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
export default Card;

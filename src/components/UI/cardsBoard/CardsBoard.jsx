import Cards from "../../cards/Cards";
import cl from "./CardsBoard.module.scss";
const CardsBoard = ({ cards, setCards, gameStarted }) => {
  return (
    <div className={cl.board}>
      {gameStarted ? (
        <Cards cards={cards} setCards={setCards} />
      ) : (
        <h1>Answers hidden behind this layer </h1>
      )}
    </div>
  );
};
export default CardsBoard;

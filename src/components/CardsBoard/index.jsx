import Cards from "../Cards";

import cl from "./CardsBoard.module.scss";

const CardsBoard = ({
  cards,
  setCards,
  gameStarted,
  setTurns,
  turns,
  setGameStarted,
}) => {
  return (
    <div className={cl.board}>
      {gameStarted ? (
        <Cards
          cards={cards}
          setCards={setCards}
          setTurns={setTurns}
          turns={turns}
          setGameStarted={setGameStarted}
        />
      ) : (
        <h1>Answers hidden behind this layer </h1>
      )}
    </div>
  );
};
export default CardsBoard;

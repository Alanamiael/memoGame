import { useState, useEffect, useCallback } from "react";

import Card from "../Card";
import FinishedGameModal from "../FinishedGameModal";

import cl from "./Cards.module.scss";

const Cards = ({ cards, setCards, setTurns, setGameStarted }) => {
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  const setMatchCards = () => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.name === secondChoice.name) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.name === firstChoice.name) {
              return { ...card, matched: true };
            }
            return card;
          })
        );

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1500);
      }
    }
  };

  useEffect(() => {
    setMatchCards();
  }, [firstChoice, secondChoice]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const isFlipped = useCallback(
    (card) =>
      card === firstChoice || card === secondChoice || card.matched === true,
    [firstChoice, secondChoice]
  );
  return (
    <div className={cl.cards__grid}>
      {cards?.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={isFlipped(card)}
          disabled={disabled}
        />
      ))}
      <FinishedGameModal
        cards={cards}
        gameFinished={gameFinished}
        setGameFinished={setGameFinished}
        setGameStarted={setGameStarted}
        setTurns={setTurns}
        setCards={setCards}
      />
    </div>
  );
};
export default Cards;

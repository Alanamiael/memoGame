import {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useCallback,
} from 'react';

import Card from '../Card';
import FinishedGameModal from '../FinishedGameModal';
import { CardImg } from '../StartGameButton/helpers';

import cl from './Cards.module.scss';

interface CardsProps {
  cards: CardImg[];
  setCards: Dispatch<SetStateAction<CardImg[]>>;
  setTurns: Dispatch<SetStateAction<number>>;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}

const Cards: FC<CardsProps> = ({
  cards,
  setCards,
  setTurns,
  setGameStarted,
}) => {
  const [firstChoice, setFirstChoice] = useState<CardImg | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardImg | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const handleChoice = (card: CardImg): void => {
    return firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  const resetTurn = useCallback(() => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  }, [setTurns]);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.name === secondChoice.name) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.name === firstChoice.name) {
              return { ...card, matched: true };
            }
            return card;
          }),
        );

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1500);
      }
    }
  }, [firstChoice, resetTurn, secondChoice, setCards]);

  const isFlipped = useCallback(
    (card: CardImg) =>
      card === firstChoice || card === secondChoice || card.matched === true,
    [firstChoice, secondChoice],
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

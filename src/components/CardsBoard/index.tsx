import { FC, Dispatch, SetStateAction } from 'react';

import Cards from '../Cards';
import { CardImg } from '../StartGameButton/helpers';

import cl from './CardsBoard.module.scss';

interface CardsBoardProps {
  cards: CardImg[];
  setCards: Dispatch<SetStateAction<CardImg[]>>;
  gameStarted: boolean;
  setTurns: Dispatch<SetStateAction<number>>;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}
const CardsBoard: FC<CardsBoardProps> = ({
  cards,
  setCards,
  gameStarted,
  setTurns,
  setGameStarted,
}) => {
  return (
    <div className={cl.board}>
      {gameStarted ? (
        <Cards
          cards={cards}
          setCards={setCards}
          setTurns={setTurns}
          setGameStarted={setGameStarted}
        />
      ) : (
        <h1>Answers hidden behind this layer </h1>
      )}
    </div>
  );
};
export default CardsBoard;

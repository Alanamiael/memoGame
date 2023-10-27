import { FC, Dispatch, SetStateAction } from 'react';

import { cardImages, CardImg } from './helpers';

import './StartGameButton.scss';

interface StartGameButtonProps {
  setCards: Dispatch<SetStateAction<CardImg[]>>;
  setTurns: Dispatch<SetStateAction<number>>;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}

const StartGameButton: FC<StartGameButtonProps> = ({
  setCards,
  setTurns,
  setGameStarted,
}) => {
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
    setGameStarted(true);
  };
  return (
    <button type="button" onClick={shuffleCards}>
      Start New Game
    </button>
  );
};
export default StartGameButton;

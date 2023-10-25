import { cardImages } from "./helpers";

import "./StartGameButton.scss";

const StartGameButton = ({ setCards, setTurns, setGameStarted }) => {
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
    setGameStarted(true);
  };
  return <button onClick={shuffleCards}>Start New Game</button>;
};
export default StartGameButton;

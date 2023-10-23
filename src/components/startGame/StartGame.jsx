import { cardImages } from "../CardSrc";
import "./StartGame.scss";
const StartGame = ({ setCards, setTurns, setGameStarted }) => {
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
export default StartGame;

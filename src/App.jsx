import { useState } from "react";
import Modal from "./components/UI/Modal/Modal";
import Cards from "./components/cards/Cards";
import "./styles/App.css";
import StartGame from "./components/startGame/StartGame";
import CardsBoard from "./components/UI/cardsBoard/CardsBoard";

function App() {
  const [modal, setModal] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  console.log(cards, turns);
  return (
    <>
      <Modal visible={modal} setVisible={setModal}></Modal>
      <StartGame
        setCards={setCards}
        setTurns={setTurns}
        setGameStarted={setGameStarted}
      />
      <CardsBoard>
        {gameStarted ? (
          <Cards cards={cards} setCards={setCards} />
        ) : (
          <h1>Answers hidden behind this layer </h1>
        )}
      </CardsBoard>
    </>
  );
}

export default App;

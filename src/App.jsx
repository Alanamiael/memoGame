import { useState } from "react";

import Modal from "./components/Modal";
import StartGameButton from "./components/StartGameButton";
import CardsBoard from "./components/CardsBoard";
import Turns from "./components/Turns";

import "./styles/App.css";

function App() {
  const [modal, setModal] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  return (
    <>
      <Modal visible={modal} setVisible={setModal}></Modal>
      <StartGameButton
        setCards={setCards}
        setTurns={setTurns}
        setGameStarted={setGameStarted}
      />
      <Turns turns={turns} />
      <CardsBoard
        cards={cards}
        setCards={setCards}
        setGameStarted={setGameStarted}
        gameStarted={gameStarted}
        setTurns={setTurns}
        turns={turns}
      />
    </>
  );
}

export default App;

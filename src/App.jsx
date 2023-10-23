import { useState } from "react";
import Modal from "./components/UI/Modal/Modal";
import Cards from "./components/cards/Cards";
import StartGame from "./components/startGame/StartGame";
import CardsBoard from "./components/UI/cardsBoard/CardsBoard";
import "./styles/App.css";

function App() {
  const [modal, setModal] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  return (
    <>
      <Modal visible={modal} setVisible={setModal}></Modal>
      <StartGame
        setCards={setCards}
        setTurns={setTurns}
        setGameStarted={setGameStarted}
      />
      <CardsBoard cards={cards} setCards={setCards} gameStarted={gameStarted} />
    </>
  );
}

export default App;

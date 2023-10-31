import { useState } from 'react';

import Modal from './components/Modal';
import StartGameButton from './components/StartGameButton';
import CardsBoard from './components/CardsBoard';
import Turns from './components/Turns';

import './styles/App.css';
import { CardImg } from './components/StartGameButton/helpers';

function App() {
  const [modal, setModal] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState<CardImg[]>([]);
  const [turns, setTurns] = useState(0);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
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
      />
    </>
  );
}

export default App;

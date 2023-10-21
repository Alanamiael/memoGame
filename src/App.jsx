import { useState } from "react";
import Modal from "./components/UI/Modal/Modal";
import Cards from "./components/cards/Cards";
import "./styles/App.css";
import { cardImages } from "./components/CardSrc";

function App() {
  const [modal, setModal] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
    setGameStarted(true);
  };

  console.log(cards, turns);
  return (
    <div>
      <Modal visible={modal} setVisible={setModal}></Modal>
      <button onClick={shuffleCards}>Start New Game</button>
      <div className="board">
        {gameStarted ? (
          <Cards cards={cards} setCards={setCards} />
        ) : (
          <h1>Answers hidden behind this layer </h1>
        )}

        {/* <div >
        {cards.map((card) => (
          <div key={card.id} >
            <div>
              <img src={card.src}  alt="card-front" />
              <img src="../img/cover.jpeg"  alt="card-back" />
            </div>
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
}

export default App;

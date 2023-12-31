import { useEffect, useMemo } from "react";

import StartGameButton from "../StartGameButton";

import closeIcon from "../Modal/closeIcon.png";
import cl from "./FinishedGameModal.module.scss";

const FinishedGameModal = ({
  cards,
  gameFinished,
  setGameFinished,
  setCards,
  setTurns,

  setGameStarted,
}) => {
  const rootClasses = [cl.modal];

  const isAllCardsMatched = useMemo(() => {
    let count = 0;
    cards.map((card) => {
      if (card.matched) {
        count += 1;
      }
      return card;
    });

    return count === 36;
  }, [cards]);

  useEffect(() => {
    if (isAllCardsMatched) {
      setGameFinished(true);
    } else {
      setGameFinished(false);
    }
  }, [isAllCardsMatched]);

  if (gameFinished) {
    rootClasses.push(cl.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setGameFinished(false)}
    >
      <div
        className={cl.modalContentFinished}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={cl.modalContentFinished}>
          <div className={cl.modalHeader}>
            <h2 className={cl.h2}>Congratulations!!!</h2>
            <div onClick={() => setGameFinished(false)} className={cl.closeBtn}>
              <img src={closeIcon} alt="close" />
            </div>
          </div>
          <div className={cl.modalText}>
            <p>You have already won this game</p>
            <p>Press the button to start a new one</p>
            <StartGameButton
              setCards={setCards}
              setTurns={setTurns}
              setGameStarted={setGameStarted}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FinishedGameModal;

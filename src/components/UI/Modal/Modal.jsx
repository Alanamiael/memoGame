import cl from "./Modal.module.css";
import closeIcon from "./closeIcon.png";

const Modal = ({ visible, setVisible }) => {
  const rootClasses = [cl.modal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={cl.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modalContent">
          <div className="modalHeader">
            <h2>Rules</h2>
            <div>
              <img src={closeIcon} alt="close" />
            </div>
          </div>
          <div className="modalText">
            <p>
              Take in turns flipping 2 cards at a time (by clicking on them)
            </p>
            <p>If they’re a match, take another turn, if not, flip them back</p>
            <p>
              Keep score by clicking next to the numbers on the score slider at
              the top
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

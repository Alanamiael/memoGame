import { FC, Dispatch, SetStateAction } from 'react';

import closeIcon from './closeIcon.png';
import cl from './Modal.module.scss';

interface ModalProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ modal, setModal }) => {
  const rootClasses = [cl.modal];

  if (modal) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setModal(false)}
      role="presentation"
    >
      <div
        className={cl.modalContent}
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <div className={cl.modalContent}>
          <div className={cl.modalHeader}>
            <h2 className={cl.h2}>Rules</h2>
            <div
              onClick={() => setModal(false)}
              className={cl.closeBtn}
              role="presentation"
            >
              <img src={closeIcon} alt="close" />
            </div>
          </div>
          <div className={cl.modalText}>
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

import { FC } from 'react';

import { CardImg } from '../StartGameButton/helpers';

import cl from './Card.module.scss';
import CoverImg from '../../../public/img/cover.jpg';

interface CardProps {
  card: CardImg;
  handleChoice: (card: CardImg) => void;
  flipped: boolean;
  disabled: boolean;
}

const Card: FC<CardProps> = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={cl.card}>
      <div className={flipped ? cl.flipped : ''}>
        <img src={card.src} className={cl.front} alt="card-front" />

        <img
          src={CoverImg}
          className={cl.back}
          alt="card-back"
          role="presentation"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
export default Card;

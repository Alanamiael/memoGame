import { FC } from 'react';

interface TurnsProps {
  turns: number;
}

const Turns: FC<TurnsProps> = ({ turns }) => {
  return <p>Turns: {turns}</p>;
};
export default Turns;

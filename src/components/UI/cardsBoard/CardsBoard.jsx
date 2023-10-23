import cl from "./CardsBoard.module.scss";
const CardsBoard = ({ children, ...props }) => {
  return (
    <div className={cl.board} {...props}>
      {" "}
      {children}
    </div>
  );
};
export default CardsBoard;

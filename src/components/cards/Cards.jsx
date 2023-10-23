import Card from "../card/Card";
import cl from "./Cards.module.css";

const Cards = ({ cards }) => {
  // const [firstChoice, setFirstChoice] = useState(null);
  // const [secondChoice, setSecondChoice] = useState(null);
  // const handleChoice = (card) => {
  //   firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  // };

  // useEffect(() => {
  //   if (firstChoice && secondChoice) {
  //     if (firstChoice.name === secondChoice.name) {
  //       console.log("match");
  //       resetTurn();
  //     } else {
  //       console.log(" not match");
  //       resetTurn();
  //     }
  //   }
  // }, [firstChoice, secondChoice]);
  // const resetTurn = () => {
  //   setFirstChoice(null);
  //   setSecondChoice(null);
  //   setTurns((prevTurns) => prevTurns + 1);
  // };
  return (
    <div className={cl.card__grid}>
      {cards.map((card) => (
        // <Card key={card.id} card={card} handleChoice={handleChoice} />
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
export default Cards;

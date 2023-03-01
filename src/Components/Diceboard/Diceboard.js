import PlayerName1 from "../PlayerName1/PlayerName1";
import PlayerName2 from "../PlayerName2/PlayerName2";
import PlayField from "../PlayingField/PlayField";
import PointCounter from "../PointCounter/PointCounter";
import RollDice from "../RollDice/RollDice";
import "./Diceboard.css";

const DiceBoard = (props) => {
  return (
    <PlayField>
      <div className="inner-container">
        <PlayerName1></PlayerName1>
      </div>
      <PointCounter></PointCounter>
      <div className="inner-container">
        <PlayerName2></PlayerName2>
      </div>
    </PlayField>
  );
};

export default DiceBoard;

import { useEffect, useState } from "react";
import "./PlayerName1.css";




const PlayerName1 = (props) => {

    const [playerName, setPlayerName] = useState('Player Name')

    useEffect(() => {
        const savedName = localStorage.getItem('inputValue1');
        if (savedName) {
            setPlayerName(savedName)
        }
    }, []);

    const playerNameHandler = (event) => {
        const name = event.target.value
        setPlayerName(name)
        saveToLocalStorage(name)
    }

    const saveToLocalStorage = (INFO) => {
        localStorage.setItem('inputValue1', INFO)
    }


  return (
      <form className="center">
        <input type="text" onChange={playerNameHandler} value={playerName} />
        <br />
      </form>
  );
};

export default PlayerName1;

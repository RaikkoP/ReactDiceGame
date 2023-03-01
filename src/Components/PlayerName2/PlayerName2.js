import { useEffect, useState } from "react";
import "./PlayerName2.css";




const PlayerName2 = () => {

    const [playerName, setPlayerName] = useState('Player Name')

    useEffect(() => {
        const savedName = localStorage.getItem('inputValue2');
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
        localStorage.setItem('inputValue2', INFO)
    }


  return (
      <form className="center">
        <input type="text" onChange={playerNameHandler} value={playerName} />
        <br />
      </form>
  );
};

export default PlayerName2;

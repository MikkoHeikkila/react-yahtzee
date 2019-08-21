import React, {useState} from 'react';
import './App.css';
import Scoresheet from './Components/Scoresheet/Scoresheet';
import Header from './Components/Header/Header';
import StartScreen from './Components/StartScreen/StartScreen';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  const setPlayers = (event) => {
    const players = parseInt(event.target.value);
    setNumberOfPlayers(players);
  }

  const startGame = (event) => {
    event.preventDefault();
    setIsGameStarted(true);
  }

  return (
    <div className="App">
      <div className="App-content">

      <Header />
      {!isGameStarted ? (
        <StartScreen setPlayers={setPlayers} startGame={startGame} />
      ):(
        <Scoresheet numberOfPlayers={numberOfPlayers} />
      )}

      </div>
    </div>
  );
}

export default App;

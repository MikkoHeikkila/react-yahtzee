import React from 'react';
import styles from './Scoresheet.module.css';
import Player from './Player/Player';
import ScoreLabels from './ScoreLabels/ScoreLabels';

function Scoresheet(props) {

  const players = [];
  for(let i = 0; i < props.numberOfPlayers; i++){
    players.push(i);
  }

  return (

    <div id={styles.scoresheet}>
        
        {/* Labels column */ }
        <ScoreLabels />

        {/* Player column(s) */ }
        {players.map(player => {
          return <Player key={player} playerName={player} />
        })}

    </div>

  );
}

export default Scoresheet;

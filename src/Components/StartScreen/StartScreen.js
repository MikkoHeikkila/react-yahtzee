import React from 'react';

function StartScreen(props) {

  return (

      <div>
        <form onSubmit={props.startGame}>
          <label>
            How many players will be playing?<br/>
            <input name="playersAmount" type="number" min="1" max="10" onChange={props.setPlayers}></input>
          </label>
          <br/>
          <input className="btn btn-primary" type="submit" value="Start game" />
        </form>
      </div>

  );
}

export default StartScreen;

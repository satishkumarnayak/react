
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

import Log from "./components/Log";


function App() {
  

  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((currActivePlayer)  => currActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns => {

      let currentPlayer = 'X';

      if(prevTurns.length > 0  && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      } 
      const updatedTurns = [ 
        { square : {row:rowIndex, col:colIndex}, player: currentPlayer }, ...prevTurns
        
      ];
      return updatedTurns;
    }));
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player intitalName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
        <Player intitalName="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
      </ol>
      <GameBoard
       onSelectSquare={handleSelectSquare} 
       turns={gameTurns}/>
      <Log turns={gameTurns}></Log>
    </div>
  ) 
}

export default App

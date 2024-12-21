
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import GameOver from "./components/GameOver";

import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winning-combinations";


const intialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function App() {
  
  let gameBoard = intialGameBoard;


   
  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  let winner;

  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row,col} = square;

      gameBoard[row][col]=player;
  }

 for(const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
 

 if(firstSquareSymbol &&
    firstSquareSymbol === secondSquareSymbol 
    && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

 const hasDraw = gameTurns.length === 9 && !winner;

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
      {(winner || hasDraw) && <GameOver winner={winner}/>}
      <GameBoard
       onSelectSquare={handleSelectSquare} 
       board={gameBoard}/>
      <Log turns={gameTurns}></Log>
    </div>
  ) 
}

export default App

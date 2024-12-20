
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"


function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currActivePlayer)  => currActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player intitalName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
        <Player intitalName="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>

    </div>
  ) 
}

export default App

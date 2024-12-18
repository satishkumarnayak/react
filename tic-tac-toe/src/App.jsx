
import Player from "./components/Player"

function App() {
  

  return (
    <div id="game-container">
      <ol id="players">
        <Player intitalName="Player 1" symbol="X"></Player>
        <Player intitalName="Player 2" symbol="O"></Player>
      </ol>
      GAME BOARD

    </div>
  ) 
}

export default App

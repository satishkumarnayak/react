

import { useState } from "react";



export default function Player({intitalName,symbol,isActive}){

    const [playerName, setPlayerName] = useState(intitalName);
    const [isEditing,setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(isEditing => !isEditing);
    }

    function handleOnChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName =  <span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName =  <input type="text" required value={playerName} onChange={handleOnChange}/>;
    }
    return(

        <li className={isActive ? 'active' : 'undefined'}>
          <span className="player"> 
          {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li> 
    );
}  
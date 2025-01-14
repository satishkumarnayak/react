
import { useState } from "react";

const Greeting = () => {

    const [changedText,setChangedText] = useState(false);

    function changeTexthandler(){
        setChangedText(true);
    }

    return (
  <div>
    <p>Hello World !</p>
    {!changedText && <p>It's good to see you!</p>}
    {changedText && <p>Changed!</p>}
    <button onClick={changeTexthandler}>Change Text!</button>
  </div>
    );
};


export default Greeting;
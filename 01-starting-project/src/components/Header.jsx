
import imagePath from '../assets/react-core-concepts.png'
import './Header.css'

const reactDesc = ['Fundamental','Cruial','Core'];

export function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }
  
 export function Header(){
  
    const reactDescription = reactDesc[genRandomInt(2)];
    return (<header>
      <img src={imagePath} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
  }
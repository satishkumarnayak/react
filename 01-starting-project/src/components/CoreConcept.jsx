


// import componentsImg from '../assets/components.png'


/*
export function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
*/
export function CoreConcept({image,title,description}){
    return(
      <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}
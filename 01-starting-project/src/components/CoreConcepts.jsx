
import { CORE_CONCEPTS } from "../data";
import  CoreConcept1  from "./CoreConcept";


export default function CoreConcepts(){

    return ( 
        <>
         <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map( item => ( <CoreConcept1 key={item.title}{...item}/>))}
        </ul>

        </section>
        </>
        );
}
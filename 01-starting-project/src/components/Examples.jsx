import {  useState } from 'react';
import TabButton from './TabButton.jsx'
import {EXAMPLES} from '../data.js'


 export default function Examples(){

     
  const [selectedTopic,setSelectedTopic] = useState();


  function handleonSelect(onselected){
    setSelectedTopic(onselected);
 
  }

    return (

        <>
           <section id="examples">
           <h2>Examples</h2>
           <menu>           
            <TabButton isSelected={selectedTopic === 'components' } onSelect={() => handleonSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx' } onSelect={() => handleonSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props' } onSelect={() => handleonSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state' } onSelect={() => handleonSelect('state')}>State</TabButton>
           </menu>   
           {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre> 
          </div>}                 
        </section>
        </>

    );
}
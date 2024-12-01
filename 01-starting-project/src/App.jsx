

import { useReducer, useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import { CoreConcept } from './components/CoreConcept.jsx';
import { Header } from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';





function App() {
 
  const [selectedTopic,setSelectedTopic] = useState();


  function handleonSelect(onselected){
    setSelectedTopic(onselected);
   // console.log(selectedTopic);
  }
  
  console.log("App Component Rendering");
  
  return (
    <div>
     <Header/>
     
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
          />
           <CoreConcept {...CORE_CONCEPTS[1]}/>
           <CoreConcept {...CORE_CONCEPTS[2]}/>
           <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
           <h2>Examples</h2>
           <menu>           
            <TabButton isSelected={selectedTopic === 'components' ? true : false} onSelect={() => handleonSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx' ? true : false} onSelect={() => handleonSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props' ? true : false} onSelect={() => handleonSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state' ? true : false} onSelect={() => handleonSelect('state')}>State</TabButton>
           </menu>   
           {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>}       
      
          
        </section>
  
      
      </main>
    </div>
  );
}

export default App;

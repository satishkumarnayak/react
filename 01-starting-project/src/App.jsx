


import { CORE_CONCEPTS } from './data.js';
import { CoreConcept } from './components/CoreConcept.jsx';
import { Header } from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';





function App() {

  let selectedcontent = "Please click a button."
  function handleonSelect(onselected){
    selectedcontent = onselected;
    console.log(onselected);
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
            <TabButton onSelect={() => handleonSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleonSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleonSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleonSelect('state')}>State</TabButton>
           </menu>
          {selectedcontent}
        </section>
  
      
      </main>
    </div>
  );
}

export default App;

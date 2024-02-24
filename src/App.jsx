import { CORE_CONCEPTS, EXAMPLES } from "./data.js"

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

let cnt = 1
function App() {
  const [selectedExampleTopic, setSelectedExampleTopic] = useState();
  function handleClick(selBtn) {
    console.log('param selBtn ', selBtn, 'selectedExampleTopic ', selectedExampleTopic, cnt);
    setSelectedExampleTopic(selBtn);

    //selectedExampleTopic still old value. Will change in next cycle
    console.log('After param selBtn ', selBtn, 'selectedExampleTopic ', selectedExampleTopic, cnt);
  }
  console.log('App ' + cnt);
  cnt++;
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts" >
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />

          <CoreConcept title={CORE_CONCEPTS[1].title} image={CORE_CONCEPTS[1].image}
            description={CORE_CONCEPTS[1].description} selBtn={selectedExampleTopic} />

          <CoreConcept {...CORE_CONCEPTS[2]} />

          <CoreConcept {...CORE_CONCEPTS[3]} />

        </ul>
      </section>
      <section id="examples" >
        <menu>
          <TabButton onClick={() => handleClick('components')}>Component</TabButton>
          <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton onClick={() => handleClick('state')}>State</TabButton>
        </menu>

        {selectedExampleTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedExampleTopic].title}</h3>
            <p>{EXAMPLES[selectedExampleTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedExampleTopic].code}
              </code>
            </pre>
          </div>) : (<div id="tab-content"> Select an item</div>)}


      </section>
    </div>
  );
}

export default App;

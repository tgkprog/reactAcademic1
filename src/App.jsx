import { CC } from "./data.js"

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [exampleContent, setExampleContent] = useState("Select one");
  function handleClick(selBtn) {
    console.log('clk b ' + selBtn);
    setExampleContent(selBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts" >
        <ul>
          <CoreConcept {...CC[0]} />

          <CoreConcept title={CC[1].title} image={CC[1].image}
            description={CC[1].description} />

          <CoreConcept {...CC[2]} />

          <CoreConcept {...CC[3]} />

        </ul>
      </section>
      <section id="examples" >
        <menu>
          <TabButton onClick={() => handleClick('c')}>Component</TabButton>
          <TabButton onClick={() => handleClick('j')}>JSX</TabButton>
          <TabButton onClick={() => handleClick('p')}>Props</TabButton>
          <TabButton onClick={() => handleClick('s')}>State</TabButton>
        </menu>
        {exampleContent}
      </section>
    </div>
  );
}

export default App;

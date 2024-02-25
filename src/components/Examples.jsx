import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
let cnt = 1;
export default function Examples() {
  const [selectedExampleTopic, setSelectedExampleTopic] = useState();
  function handleClick(selBtn) {
    console.log(
      "param selBtn ",
      selBtn,
      "selectedExampleTopic ",
      selectedExampleTopic,
      cnt
    );
    setSelectedExampleTopic(selBtn);

    //selectedExampleTopic still old value. Will change in next cycle
    console.log(
      "After param selBtn ",
      selBtn,
      "selectedExampleTopic ",
      selectedExampleTopic,
      cnt
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              onClick={() => handleClick("components")}
              selected={selectedExampleTopic === "components"}
            >
              Component
            </TabButton>
            <TabButton
              onClick={() => handleClick("jsx")}
              selected={selectedExampleTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleClick("props")}
              selected={selectedExampleTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleClick("state")}
              selected={selectedExampleTopic === "state"}
            >
              State
            </TabButton>
          </>
        }
      >
        {selectedExampleTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedExampleTopic].title}</h3>
            <p>{EXAMPLES[selectedExampleTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedExampleTopic].code}</code>
            </pre>
          </div>
        ) : (
          <div id="tab-content"> Select an item</div>
        )}
      </Tabs>
    </Section>
  );
}

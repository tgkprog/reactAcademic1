import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Msg from "./components/messages/Message";

import ListGroup1 from "./components/listGroups/ListGroup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import initCountryList1 from "./initializers/CountryListGroup1";

function App() {
  const [counta, setCount] = useState(1);
  const items = initCountryList1();
  const handleColorSelected = (idx: number, itm: string) => {
    console.log("handleColorSelected " + idx + " " + itm);
  };
  return (
    <>
      {" "}
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <Msg />
          <ListGroup1
            items={items}
            heading="Colours"
            onSelectItem={handleColorSelected}
          />
        </div>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((counta) => counta - 1)}>
            count is {counta}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more <Msg />
        </p>
      </div>
    </>
  );
}

export default App;

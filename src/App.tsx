import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Msg from "./components/messages/Message";
import { SimpleAlert, AlertType } from "./components/SimpleAlert";

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
      <SimpleAlert alertType={AlertType.danger}>
        Good job<b>!</b>
      </SimpleAlert>
    </>
  );
}

export default App;

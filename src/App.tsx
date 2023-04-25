import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Msg from "./components/messages/Message";
import { SimpleAlert } from "./components/SimpleAlert";

import ListGroup1 from "./components/listGroups/ListGroup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import initCountryList1 from "./initializers/CountryListGroup1";
import Button from "./components/Button";

function App() {
  const [alertVisibile, setAlertVisibile] = useState(false);
  const [counta, setCount] = useState(1);
  const items = initCountryList1();
  const handleColorSelected = (idx: number, itm: string) => {
    console.log("handleColorSelected " + idx + " " + itm);
  };

  const handleAlertClose = () => {
    setAlertVisibile(false);
  };

  const handleGoButtonClicked = (e: any) => {
    console.log("handleGoButtonClicked " + e + " at " + new Date());
    setAlertVisibile(!alertVisibile);
  };

  return (
    <>
      <Button onClick={handleGoButtonClicked} color="warning">
        Go 2
      </Button>
      {alertVisibile && (
        <SimpleAlert
          alertType="danger"
          autoHide={true}
          onClose={handleAlertClose}
        >
          Good job<b>!</b> <span> test</span>
        </SimpleAlert>
      )}
      <div>
        <br />
        node -v
        <br />
        v20.0.0 <br />
      </div>
    </>
  );
}

export default App;

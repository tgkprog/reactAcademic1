import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";


let cnt = 1;
function App() {
  console.log("App " + cnt);
  cnt++;
  return (
    <>
      <Header />

      <CoreConcepts />
      <Examples />
    </>
  );
}

export default App;

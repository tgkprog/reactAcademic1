import { useState } from "react";
//Pascal Casing
let counta = 8;
function Message() {
  //JSX:Javascript XML
  return "";
}

function Msg() {
  const [counta, setCount] = useState(1);
  //JSX:Javascript XML
  return (
    <>
      <span
        className="fs-2 text"
        onClick={() => setCount((counta) => counta - 2)}
      >
        Msg B{counta}
      </span>
    </>
  );
}

export default Msg;

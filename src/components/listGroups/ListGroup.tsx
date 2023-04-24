import { useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: Array<Array<any>>;
  heading: string;
  onSelectItem: (idx: number, item: string) => void;
}

//Pascal Casing
function ListGroup1({ items, heading, onSelectItem }: Props) {
  //countL++;

  let noop1: string = "";
  //let selectedIndex = -1;
  //(state hook) returns a variable and a setter fn
  const [selectedIndex, setSelectedIndex] = useState(-1);

  let clzsHd = " fs-2  text-primary";
  //console.log(" ul txt count L " + countL + ", is 0 ? " + (countL == 0));
  const countL = items.length;
  if (countL == 0) {
    clzsHd = " fs-1 text-warning";
  }
  const ulTxt = () => {
    return (
      "We have " +
      countL +
      " " +
      (countL == 1 ? "item" : "items") +
      (countL > 0 ? ":" : "")
    );
  };

  const handleClick = (event: MouseEvent) => console.log(event);

  const ulItem = (i: any, indx: number) => {
    //console.log(i[0]);
    return (
      <li
        className={
          selectedIndex === indx ? "list-group-item active" : "list-group-item"
        }
        key={i[0]}
        value={i[0]}
        onClick={() => {
          setSelectedIndex(indx);
          onSelectItem(i[0], i[1]);
        }}
      >
        {i[1]}
      </li>
    );
  };

  return (
    <>
      <br />
      <span className={clzsHd}>{heading}</span>
      <br />
      <span>{ulTxt()}</span>

      <ul className="list-group">
        {items.map((itm, indx) => ulItem(itm, indx))}
      </ul>
      {(noop1 = noop1)}
    </>
  );
}

export default ListGroup1;

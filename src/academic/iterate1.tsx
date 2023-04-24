var items = [
  [1, "Blue"],
  [2, "Yellow"],
  [3, "Red"],
  [4, "White"],
  [5, "Green"],
];
var lis = items.map((item) => <li value={item[0]}>item[1]</li>);
lis.forEach((i) => console.log(i));

const proc1 = (itm: Array<any>) => {
  itm;
};

items.forEach((itm) => {
  proc1(itm);
});

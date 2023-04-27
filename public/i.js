const Person = {
  fname: "Mary",
  talk(n) {
    var self = this;
    setTimeout(() => {
      /*   console.log(
            "hi in talk callback ",
            this, " " + new Date(),
            "self ", self,
            ", n " + n
        ); */
    }, 800);
    //console.log("hi in talk ", this, " " + new Date(), ", n " + n);

    //console.log(this);
  },

  talk2: (n) => {
    //here this wont work
    setTimeout(() => {
      //console.log("hi in talk callback2 ", this, " " + new Date() + ", n " + n);
    }, 1256);
    //console.log("\nhi in talk2 ", this, " " + new Date() + ", n " + n);
    //console.log(this);
  },
};
Person.talk(67);
Person.talk2("gh");

Person.talk(83);

console.log("---\n----\n");

let people = [
  { id: 2, name: "Sara" },
  { id: 8, name: "Ram" },
  { id: 12, name: "Pia" },
];

document.write("\n<ol type=A>\n");
let firstNameLis = people.map((p) =>
  document.write(`\n<li key='${p["id"]}'>${p["name"]}</li>`)
);

document.write("\n</ol>\n");

let h = [9, 0, 3];
let j = [90, 45, 30, 94];
console.log("h ", h, "\nj ", j);
let b = h.filter((i) => i > 3);
console.log("b filter h >3 : ", b);

let bb = [...b, 45, ...h];
console.log("bb ... 45 ... j: ", b);

let { id: id } = people[2];
console.log("bid decomposed from people 2: ", id, "\n peop [2]", people[2]);

class Car {
  constructor(name, yom, cost, mileage, gas) {
    this.name = name;
    this.yom = yom;
    this.cost = cost;
    this.mileage = mileage;
    this.gas = gas;
  }

  drive(dist) {
    let possi = this.gas * this.mileage;
    if (possi >= dist) {
      this.gas = this.gas - dist / this.mileage;
      return dist;
    }
    this.gas = 0;
    return possi;
  }
}

let chevy = new Car("Chevy blue", 2023, 89000, 20, 100);
console.log(chevy);
console.log("drv 10", chevy.drive(10), chevy);
console.log("drv 50", chevy.drive(50), chevy);

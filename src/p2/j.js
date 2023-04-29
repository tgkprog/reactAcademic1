import Car from "./transport/Car";
import { Vehicle } from "./transport/Vehicle";

let esteem = new Car("esteem blue", 2023, 89000, 20, 100);
console.log(esteem);
console.log("drv 10", esteem.drive(10), esteem);
console.log("drv 50", esteem.drive(50), esteem);

let chevy = new Car("Chevy blue", 2023, 89000, 10, 10);
console.log(chevy);
console.log("drv 10", chevy.drive(10), chevy);
console.log("drv 50", chevy.drive(50), chevy);
console.log("drv 60", chevy.drive(60), chevy);

let vBetty = new Vehicle("Betty", 1980, 9000, 100, 10);
var dist1 = 20;
console.log(vBetty);

console.log(
  "Here\nno obj ",
  ` betty vehc trvl ${dist1} `,
  vBetty.distPossible(dist1, false)
);

console.log(
  vBetty,
  ">with obj ",
  ` betty vehc trvl ${dist1} `,
  vBetty.distPossible(dist1, false)
);

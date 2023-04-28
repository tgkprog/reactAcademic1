class Vehicle {
  constructor(name, yom, cost, mileage, gas) {
    this.name = name;
    this.yom = yom;
    this.cost = cost;
    this.mileage = mileage;
    this.gas = gas;
  }

  distPossible(distance, calcOnly) {
    let possibleDist = this.gas * this.mileage;
    if (possibleDist >= distance) {
      if (!calcOnly) {
        this.gas = this.gas - distance / this.mileage;
      }
      return distance;
    }
    if (!calcOnly) {
      this.gas = 0;
    }
    return possibleDist;
  }
}

class Car extends Vehicle {
  constructor(name, yom, cost, mileage, gas, doors, roofType) {
    super(name, yom, cost, mileage, gas);
    this.doors = doors;
    this.roofType = roofType;
  }

  drive(distance) {
    let possibleDist = super.distPossible(distance, true);
    if (possibleDist > 0) {
      if (this.carOkay()) {
        return super.distPossible(distance, false);
      }
    }
    return 0;
  }

  carOkay() {
    return true;
  }
}

let esteem = new Car("esteem blue", 2023, 89000, 20, 100);
console.log(esteem);
console.log("drv 10", esteem.drive(10), esteem);
console.log("drv 50", esteem.drive(50), esteem);

let chevy = new Car("Chevy blue", 2023, 89000, 10, 10);
console.log(chevy);
console.log("drv 10", chevy.drive(10), chevy);
console.log("drv 50", chevy.drive(50), chevy);
console.log("drv 60", chevy.drive(60), chevy);

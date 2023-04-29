export class Vehicle {
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

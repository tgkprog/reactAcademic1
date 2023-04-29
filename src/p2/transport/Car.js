import { Vehicle } from "./Vehicle";

export default class Car extends Vehicle {
  constructor(name, yom, cost, mileage, gas, doors, roofType) {
    super(name, yom, cost, mileage, gas);
    this.doors = doors;
    this.roofType = roofType;
  }

  drive(distance) {
    let possibleDist = super.distPossible(distance, true);
    if (possibleDist > 0) {
      if (this.carOkay()) {
        // use this & super for all member access
        return super.distPossible(distance, false);
      }
    }
    return 0;
  }

  carOkay() {
    return true;
  }
}

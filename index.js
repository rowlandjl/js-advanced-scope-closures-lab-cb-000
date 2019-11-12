function produceDrivingRange() {
  
}


function produceTipCalculator(percentage) {
  return function(rideFare) {
    return rideFare * percentage;
  }
}


function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
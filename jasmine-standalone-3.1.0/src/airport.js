const AIRPORT_CAPACITY = 55;

function Airport() {
  this.planes = [];
  this.capacity = AIRPORT_CAPACITY;
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

Airport.prototype.isplaneInAirport = function(plane) {
  if (this.planes.includes(plane)) {
    return true;
  } else {
    return false;
  };
 };

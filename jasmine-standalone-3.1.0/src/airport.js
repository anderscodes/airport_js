const AIRPORT_CAPACITY = 55;

function Airport() {
  this.planes = [];
  this.capacity = AIRPORT_CAPACITY;
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.take_off = function(plane) {
  index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

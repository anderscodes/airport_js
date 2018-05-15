const AIRPORT_CAPACITY = 55;

function Airport() {
  this.planes = [];
  this.capacity = AIRPORT_CAPACITY;
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

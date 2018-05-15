function Plane() {
  this.flying = false
};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.takeFlight = function() {
  this.flying = true;
}

Plane.prototype.ground = function() {
  this.flying = false;
}

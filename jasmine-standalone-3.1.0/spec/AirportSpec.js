plane = jasmine.createSpy('plane');
beforeEach(function() {
  airport = new Airport();
  const AIRPORT_CAPACITY = 55;
});

describe("Airport.planes", function() {
  it("Should be an empty array", function() {
    expect(airport.planes).toEqual([]);
  });
});

describe("Airport.capacity", function() {
  it("Should be 55", function() {
    expect(airport.capacity).toEqual(AIRPORT_CAPACITY);
  });
});

describe("Airport.land", function() {
  it("Should add a plane to planes array", function() {
    airport.land(plane)
    expect(airport.planes).toEqual([plane]);
  });
  it("should raise an error if the airport is full", function(){
    for(var i=0; i<AIRPORT_CAPACITY; i++) {
    airport.land(plane);
    }
    expect(function() {airport.land(plane);}).toThrow("Airport is FULL!");
  });
});

describe("Airport.takeOff", function() {
  it("Should remove the selected plane from the planes array", function(){
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).toEqual([]);
  });
});

describe("Airport.takeOff", function() {
  it("Should remove the selected plane from the planes array", function(){
    plane1 = 'plane1'
    plane2 = 'plane2'
    plane3 = 'plane3'
    airport.land(plane1)
    airport.land(plane2)
    airport.land(plane3)
    airport.takeOff(plane2)
    expect(airport.planes).toEqual(['plane1', 'plane3']);
  });
});

describe("Airport.isplaneInAirport", function() {
  it("Should return true if plane is in airport", function() {
    airport.land(plane)
    expect(airport.isplaneInAirport(plane)).toBe(true)
  });
  it("should return false if plane is not in airport", function() {
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.isplaneInAirport(plane)).toBe(false)
  });
});

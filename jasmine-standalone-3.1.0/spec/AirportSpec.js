
describe("Airport.planes", function() {
  it("Should be an empty array", function() {
    airport = new Airport
    expect(airport.planes).toEqual([]);
  });
});

describe("Airport.capacity", function() {
  it("Should be 55", function() {
    airport = new Airport
    expect(airport.capacity).toEqual(55);
  });
});

describe("Airport.land", function() {
  it("Should add a plane to planes array", function() {
    airport = new Airport
    plane = {}
    airport.land(plane)
    expect(airport.planes).toEqual([plane]);
  });
});

describe("Airport.take_off", function() {
  it("Should remove the selected plane from the planes array", function(){
    airport = new Airport
    plane = {}
    airport.land(plane)
    airport.take_off(plane)
    expect(airport.planes).toEqual([]);
  });
});

describe("Airport.take_off", function() {
  it("Should remove the selected plane from the planes array", function(){
    airport = new Airport
    plane1 = 'plane1'
    plane2 = 'plane2'
    plane3 = 'plane3'
    airport.land(plane1)
    airport.land(plane2)
    airport.land(plane3)
    airport.take_off(plane2)
    console.log(airport.planes)
    expect(airport.planes).toEqual(['plane1', 'plane3']);
  });
});

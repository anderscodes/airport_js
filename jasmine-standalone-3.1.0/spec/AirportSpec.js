describe("Airport.planes", function() {
  it("Should be an empty array", function() {
    airport = new Airport
    expect(airport.planes).toEqual([]);
  });
});

describe("Airport.capacity", function() {
  it("Should be 55", function() {
    airport = new Airport
    expect(airport.capacity).toEqual(55)
  });
});

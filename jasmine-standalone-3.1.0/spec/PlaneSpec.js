describe("isFlying", function() {
  it("Is not flying", function() {
    plane = new Plane
    expect(plane.isFlying()).toBe(false)
  });
});

describe("takeFlight", function() {
  it("Changes isFlying to true", function() {
    plane = new Plane
    plane.takeFlight()
    expect(plane.isFlying()).toBe(true)
  });
});

describe("ground", function() {
  it("Changes isFlying to false", function() {
    plane = new Plane
    plane.takeFlight()
    plane.ground()
    expect(plane.isFlying()).toBe(false)
  })
})

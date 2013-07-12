describe("TimedTask", function() {
  it("has a title", function() {
    expect(new TimedTask({ title: "My Timed Task"}).title)
      .toEqual("My Timed Task");
  });

  it("has a starting time", function() {
    expect(new TimedTask().startingDate)
      .toBeGreaterThan(128498); // totally random
  });
});

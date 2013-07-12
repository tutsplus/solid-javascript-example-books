describe("Task", function() {
  it("has a title", function() {
    expect(new Task().title).toEqual("Untitled Task");
  });

  it("can be set a title", function() {
    expect(new Task({ title: "My First Task" }).title).toEqual("My First Task");
  });
});

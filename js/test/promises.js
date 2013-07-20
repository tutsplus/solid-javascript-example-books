describe("Promise", function() {
  it("is resolved", function(done) {
    var output = "";
    getJSON("/examples/promised.json")
    .then(function(data) {
      output += "JSON got back!";
    },function(errorData) {
      expect(output).toBe("JSON got back!", "** Promise failed. **");
      done();
    })
    .then(function() {
      expect(output).toBe("JSON got back!");
      done();
    });

  });
});

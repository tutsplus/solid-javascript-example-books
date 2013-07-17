describe("Liker", function() {
  it("likes a post", function(done) {
    $("#sandbox").html("<div id='post'><button id='like'>1</button></div>");
    new Liker();

    var expectation = function() {
      expect($("#like").html()).toEqual("2");
      done();
    };

    $("#like").click(expectation).click();
  });
});

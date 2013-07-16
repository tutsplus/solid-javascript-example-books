describe("TagsMixin", function() {
  var Class;

  beforeEach(function() {
    Class = function() {};
    Class.mixin.apply(Class,[ Tags ] );
  });

  it("has tags", function() {
    expect(new Class().listTags()).toEqual([]);
  });

  it("adds a tag", function() {
    var object = new Class();
    object.addTag("tutsplus");

    expect(object.listTags()).toEqual([ "tutsplus" ]);
  });

  it("removes a tag", function() {
    var object = new Class();
    object.addTag("tutsplus");
    object.removeTag("tutsplus")
    expect(object.listTags()).toEqual([]);
  });

});

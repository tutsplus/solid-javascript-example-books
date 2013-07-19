describe("Book rental", function() {
  describe("Stats", function() {
    var stats,
        order = new Order(),
        book = new Book("Harry Potter");

    beforeEach(function() {
      stats = new Stats();
      order.addBook(book);
      spyOn(Library,"allOrders").andReturn([ order ]);
    });

    it("retrieves the currently rented books", function() {
      expect(stats.rentedBooks()).toEqual([book]);
    });
  });
});

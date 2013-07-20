describe("Book rental", function() {
  describe("Stats", function() {
    var stats,
        order = new Order(),
        book = new Book("Harry Potter"),
        second_book = new Book("Lord of the Rings");

    beforeEach(function() {
      stats = new Stats();
      order.addBook(book);
      spyOn(Library,"allOrders").andReturn([ order ]);
    });

    it("retrieves the currently rented books", function() {
      var orders = Library.allOrders();

      expect(stats.rentedBooks(orders)).toEqual([book]);
    });
  });
});

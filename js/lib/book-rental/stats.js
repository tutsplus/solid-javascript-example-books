var Stats = function() {};

Stats.prototype.rentedBooks = function() {
  var orders = Library.allOrders();

  return orders.reduce(function(array, order, index) {
    order.items.forEach(function(item) {
      array.push(item.book);
    });
    return array;
  }, []);
};

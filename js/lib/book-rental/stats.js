var Stats = function() {};

Stats.prototype.rentedBooks = function(orders) {
  return orders.reduce(function(array, order, index) {
    order.items.forEach(function(item) {
      array.push(item.book);
    });
    return array;
  }, []);
};

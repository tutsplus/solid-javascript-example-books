var Library = function() {};

Library.decrementAvailabilityFor = function(book) {
  book._availability--;
};

Library.incrementAvailabilityFor = function(book) {
  book._availability++;
}

Library.allOrders = function() {};

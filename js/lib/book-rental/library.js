var Library = function() {};

Library.decrementAvailabilityFor = function(book) {
  book.availibility--;
};

Library.incrementAvailabilityFor = function(book) {
  book.availibility++;
}

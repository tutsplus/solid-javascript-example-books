var Item = function(book) {
  this.book = book;
};

Item.prototype = {
  clear: function() {
    Library.incrementAvailabilityFor(this.book);
  }
};

var FlexibleOrder = function(user) {
  Order.apply(this,[ user ]);
};

FlexibleOrder.prototype = Order.prototype;

FlexibleOrder.prototype.terminateBook = function(book) {
  var index = this._findItemIndex(book);
  this.items.splice(index,1);
  this._updateDueDate();
};

FlexibleOrder.prototype._findItemIndex = function(book) {
  var i = null;
  this.items.forEach(function(item, index) {
    if (item.book === book) {
      i = index;
      return;
    }
  });
  return i;
};

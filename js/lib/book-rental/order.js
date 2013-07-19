var Order = function(user){
  this.user = user;
  this.items = [];
  this.status = "started";
  this.dueDate = undefined;

  return this;
};

Order.prototype = {
  addBook: function(book) {
    this.items.push(new Item(book));
    this._updateDueDate();
    Library.decrementAvailabilityFor(book);
  }

, process: function() {
    this.status = "active";
  }

, terminate: function() {
    this.items.forEach(function(item) {
      item.clear();
    });
    this.status = "complete";
  }

  // Private

, _updateDueDate: function() {
    var min = this._minDayLimit();

    this.dueDate = this.dueDate || new Date();
    this.dueDate.setDate(new Date().getDate() + min);
  }

, _minDayLimit: function() {
    return this._dayLimits().reduce(function(previous,current) {
      return current < previous
        ? current
        : previous;
    });
  }

, _dayLimits: function() {
    return this.items.map(function(item) {
      return item.book.dayLimit;
    });
  }
};

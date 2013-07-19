var Book = function(title, dayLimit) {
  this.title = title;
  this.dayLimit = dayLimit || 7;
  this._availability = 3;
};

var Tags = function() {};

Tags.prototype.listTags = function() {
  this._tags = this._tags || [];
  return this._tags;
};

Tags.prototype.addTag = function(tag) {
  this._tags = this._tags || [];
  this._tags.push(tag);
  this.publish && this.publish("tagAdded");
};

Tags.prototype.removeTag = function(tag) {
  this._tags = this._tags || [];

  var index = this._tags.indexOf(tag);
  this._tags.splice(index, 1);
};

Tags.prototype.countTags = function() {
  return this._tags.length;
};

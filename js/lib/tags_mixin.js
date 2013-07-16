Object.prototype.mixin = unction(module) {
  for (method in module.prototype) {
    if (module.prototype.hasOwnProperty(method)) {
      this.prototype[method] = module.prototype[method];
    }
  }
};

var Tags = function() {};

Tags.prototype.listTags = function() {
  this._tags = this._tags || [];
  return this._tags;
};

Tags.prototype.addTag = function(tag) {
  this._tags = this._tags || [];
  this._tags.push(tag);
};

Tags.prototype.removeTag = function(tag) {
  this._tags = this._tags || [];

  var index = this._tags.indexOf(tag);
  this._tags.splice(index, 1);
};

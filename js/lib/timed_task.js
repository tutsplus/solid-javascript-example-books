var TimedTask = function(options) {
  options = options || {};
  Task.apply(this,[ options ]);
  this.startingDate = options.startingDate || new Date().getTime();

  return this;
};

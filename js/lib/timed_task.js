var TimedTask = function(options) {
  options = options || {};
  var that = new Task(options);
  that.startingDate = options.startingDate || new Date().getTime();

  return that;
};

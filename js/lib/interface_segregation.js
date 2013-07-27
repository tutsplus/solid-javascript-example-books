var Teacher = function() {
  return this;
};

var Student = function() {
  return this;
};

var UserLoginActions = function() {};

UserLoginActions.prototype = {
  login: function(password) {},
};

UserPasswordResetActions = function() {};

UserPasswordResetActions.prototype = {
  resetPassword: function() {}
};

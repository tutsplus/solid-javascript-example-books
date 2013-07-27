describe("Interface Segregation", function() {
  describe("Teacher", function() {
    Teacher.mixin(UserLoginActions);
    Teacher.mixin(UserPasswordResetActions);

    it("can login",function() {
      var t = new Teacher("José Mota");
      expect(t.login).toBeDefined();
    });

    it("can request a password reset",function() {
      var t = new Teacher("José Mota");
      expect(t.resetPassword).toBeDefined();
    });
  });

  describe("Student", function() {
    Student.mixin(UserLoginActions);

    it("can login",function() {
      var s = new Student("John Doe");
      expect(s.login).toBeDefined();
    });

    it("cannot request a password reset",function() {
      var s = new Student("John Doe");
      expect(s.resetPassword).toBeUndefined();
    });
  });
});

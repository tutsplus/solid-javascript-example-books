var Liker = function() {
  var that = this;
  that.count = 1;
  that.bind();
};

Liker.prototype = {
  bind : function() {
    var that = this;
    $("#like").on("click", function(e) {
      e.preventDefault();
      that.count++;
      that.publish("liked");
    });

    this.subscribe("liked", function() {
      this.render();
    });
  }

, render : function() {
    this.updateCount();
    this.logEntry();
  }

, updateCount : function() {
    $("#like").html(this.count);
  }

, logEntry : function() {
    $("#like_count").append("<li>"+new Date().toString()+"</li>");
  }
};


Liker.mixin(PubSub);

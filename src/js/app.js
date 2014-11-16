Backbone   = require('backbone');
Backbone.$ = require('jquery');

var HelloView = require('./views/hello_view');

var helloView = new HelloView({
  el: "body"
});

helloView.render();

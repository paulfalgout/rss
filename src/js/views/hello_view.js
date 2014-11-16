var _ = require('underscore');
var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
  template: _.template("<h1>Well hello there.</h1>")
});

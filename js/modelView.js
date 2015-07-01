var Backbone = require ('backbone');
var $ = require('jquery');
var _ = require('underscore');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  template: _.template($('#postTmpl').html()), // <------------ Gets your template
  initialize: function(options) {
    console.log('our model view is created');
  },

  render: function () {
    var tmpl = this.template(this.model.toJSON());
    this.$el.html(tmpl);
    return this;
  }

});

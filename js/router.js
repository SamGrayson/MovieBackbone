var Backbone = require('backbone');
var $ = require ('jquery');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  routes: {
    "": "alertme",
    "teddybear": "alertme"
  },
  alertme: function (stuff){
    console.log(stuff);
    console.log('alertme called');
  }
});

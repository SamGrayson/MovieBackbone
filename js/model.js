var Backbone = require ('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({

  urlRoot: 'http://samtinyserver.herokuapp.com/collections/backboneimdb2',
  idAttribute: '_id',
  initialize: function() {
    console.log('adding movie')
  }

});

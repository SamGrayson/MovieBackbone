var Backbone = require ('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({

  urlRoot: 'http://samtinyserver.heroku.com/collections/backboneimdb',
  idAttribute: '_id',
  initialize: function() {
    console.log('adding movie')
  }

});

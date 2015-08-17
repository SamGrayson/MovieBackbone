var Backbone = require ('backbone');
var $ = require ('jquery');
var PostModel = require ('./model');
var PostCollection = require ('./modelView')
Backbone.$ = $;


var array = [];

module.exports = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://samtinyserver.heroku.com/collections/backboneimdb2'
});

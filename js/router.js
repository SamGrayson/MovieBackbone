var Backbone = require('backbone');
var $ = require ('jquery');
var Model = require ('./model');
var DetailView = require ('./detailView');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  routes: {
    "": "alertme",
    "movie/:id": "detailView",
  },
  alertme: function (stuff){
    console.log(stuff);
    console.log('alertme called');
  },
  detailView: function (id) {
    console.log("I'm working");
    $('#movies').css('height', '100%');
    $('#movies').css('width', '100vw');
    $('.movies').html('');
    $('.footer').removeClass('hidden');
    var movie = new Model({_id: id});
    movie.fetch().then(function () {
      var movieView = new DetailView({model: movie});
      $('.movies').html(movieView.render().el);
    });
  }
});

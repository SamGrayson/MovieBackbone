var Backbone = require('backbone');
var $ = require ('jquery');
var Model = require ('./model');
var DetailView = require ('./detailView');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  routes: {
    "": "alertme",
    "movie/:id": "detailView",
    "home" : "phoneHome"
  },
  alertme: function (stuff){
    console.log(stuff);
    console.log('alertme called');
  },
  detailView: function (id) {
    console.log("I'm working");
    var movieId = id;
    console.log(movieId);
    $('#movies').css('height', '100%');
    $('#movies').css('width', '100vw');
    $('.movies').html('');
    $('.footer').removeClass('hidden');
    var movie = new Model({_id: movieId});
    movie.fetch().then(function () {
      var movieView = new DetailView({model: movie});
      $('.movies').html(movieView.render().el);
    });
  },
  phoneHome: function (e) {
    e.preventDefault();
    $('.movies').html('');
    $('.footer').addClass('hidden');
    $('#movies').css('height', '0');
    $('#movies').css('width', '0');
  }
});

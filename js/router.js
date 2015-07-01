var Backbone = require('backbone');
var $ = require ('jquery');
var Model = require ('./model');
var DetailView = require ('./detailView');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  routes: {
    "": "alertme",
    "movie/:id": "detailView",
    "home" : "phoneHome",
    "form" : "formPage",
    "aboutme" : "aboutPage",
    "contact" : "contactPage",
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
    var movie = new Model({_id: movieId});
    movie.fetch().then(function () {
      var movieView = new DetailView({model: movie});
      $('.movies').html(movieView.render().el);
      $('.footer').removeClass('hidden');
    });
  },
  phoneHome: function () {
    $('.topPage').removeClass('hidden');
    $('.movies').html('');
    $('.footer').addClass('hidden');
    $('.formWrapper').addClass('hidden');
    $('.aboutMe').addClass('hidden');
    $('.contact').addClass('hidden');
    $('#movies').css('height', '0');
    $('#movies').css('width', '0');
  },
  formPage: function() {
    var stringy = JSON.stringify(["up", "down", "left", "right", "a", "b"]);
    var codeStringy = JSON.stringify(window.codeArray);
    if(codeStringy === stringy) {
      $('.formWrapper').removeClass('hidden');
      $('.close').removeClass('hidden');
      window.codeArray = [];
    } else {
      window.codeArray = [];
    }
  },
  aboutPage: function() {
    $('.aboutMe').removeClass('hidden');
    $('.footer').addClass('hidden');
    $('.formWrapper').addClass('hidden');
    $('.topPage').addClass('hidden');
    $('#movies').css('height', '0');
    $('#movies').css('width', '0');
    $('.movies').html('');
  },
  contactPage: function() {

  }
});

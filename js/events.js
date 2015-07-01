var Backbone = require ('backbone');
var $ = require('jquery');
var _ = require ('underscore');
var PostCollection = require ('./models')
var PostCollectionView = require('./view');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '.pageWrapper',
  events: {
    "click #titleSort": "sortTitle" , // <--------------- Events to add to your page... (<event> <class to do event> : <function on event>)
    'click #highestSort': 'sortHighest',
    'click #lowestSort': 'sortLowest',
    'click #submitForm': 'addButtonLoad',
    'click .start': 'openForm',
    'click .close': 'destroyMovie'
  },
  sortTitle: function(event) {
    $('.movies').html('');
    $('#movies').css('height', '100%');
    $('#movies').css('width', '100vw');
    $('.footer').addClass('hidden');

    var collect = new PostCollection();
    collect.fetch().then(function(){
      var titleArray = [];
      var model = collect.models;

      _.each(model, function(el){
        titleArray.push(el.attributes);
      })

      var sortedTitle = _.sortBy(titleArray, 'title');

      var myCollectionTitle = new PostCollection(sortedTitle);

      collectionView = new PostCollectionView({collection: myCollectionTitle});
      $('.footer').removeClass('hidden');
    });
  },
  sortHighest: function(event) {
    $('.movies').html('');
    $('#movies').css('height', '100%');
    $('#movies').css('width', '100vh');
    $('.footer').addClass('hidden');

    var collect = new PostCollection();
    collect.fetch().then(function(){
    var highestArray = [];
    var model = collect.models;

    _.each(model, function(el){
      highestArray.push(el.attributes);
    })

    var sortedHigh = _.sortBy(highestArray, 'rating').reverse();

    var myCollectionHigh = new PostCollection(sortedHigh);

    collectionView = new PostCollectionView({collection: myCollectionHigh});
    $('.footer').removeClass('hidden');
  });
  },
  sortLowest: function(event) {
    $('.movies').html('');
    $('#movies').css('height', '100%');
    $('#movies').css('width', '100vh');
    $('.footer').addClass('hidden');

    var collect = new PostCollection();
    collect.fetch().then(function(){
    var lowestArray = [];
    var model = collect.models;

    _.each(model, function(el){
      lowestArray.push(el.attributes);
    })

    var sortedLow = _.sortBy(lowestArray, 'rating');

    var myCollectionLow = new PostCollection(sortedLow);

    collectionView = new PostCollectionView({collection: myCollectionLow});
    $('.footer').removeClass('hidden');
  });
},

  addButtonLoad: function (event) {
    $('.movies').html('');
    $('#movies').css('height', '100%');
    $('#movies').css('width', '100vh');
    $('.footer').addClass('hidden');

    var collect = new PostCollection();
    collect.fetch().then(function(){
    var model = collect.models;

    var myCollection = new PostCollection(model);

    collectionView = new PostCollectionView({collection: myCollection});
    $('.footer').removeClass('hidden');
    $('.formWrapper').addClass('hidden');
  });
},

  openForm: function () {
    $('.formWrapper').removeClass('hidden');
    $('.close').removeClass('hidden');
  },

  destroyMovie: function(e) {
    e.preventDefault();
    var name = $(e.currentTarget).find('span').html();
    var collect = new PostCollection();
    collect.fetch().then(function(){
      var movieToDestroy = collect.findWhere({title: name})
      movieToDestroy.destroy();
      $('.movies').html('');
    });
  }

})

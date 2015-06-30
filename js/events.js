var Backbone = require ('backbone');
var $ = require('jquery');
var _ = require ('underscore');
var PostCollection = require ('./models')
var PostCollectionView = require('./view');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '.sort',
  events: {
    "click #titleSort": "sortTitle" , // <--------------- Events to add to your page... (<event> <class to do event> : <function on event>)
    'click #highestSort': 'sortHighest',
    'click #lowestSort': 'sortLowest'
  },
  sortTitle: function(event) {
    $('.movies').html('');
    $('#movies').css('height', '100vh');
    $('#movies').css('width', '100vh');

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
    });
  },
  sortHighest: function(event) {
    $('.movies').html('');
    $('#movies').css('height', '100vh');
    $('#movies').css('width', '100vh');

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
  });
  },
  sortLowest: function(event) {
    $('.movies').html('');
    $('#movies').css('height', '100vh');
    $('#movies').css('width', '100vh');

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
  });
  }
})

var Backbone = require ('backbone');
var $ = require('jquery');
var _ = require ('underscore');
var PostCollection = require ('./models')
var PostCollectionView = require('./view');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '.pageWrapper',
  initialize: function() {
    this.listenTo(movies.collection, 'update', movies.reload);
    this.listenTo(movies.model, 'destroy', movies.delete);
  },
  events: {
    "click #titleSort": "sortTitle" , // <--------------- Events to add to your page... (<event> <class to do event> : <function on event>)
    'click #highestSort': 'sortHighest',
    'click #lowestSort': 'sortLowest',
    'click #submitForm': 'addButtonLoad',
    'click .start': 'openForm',
    'click .close': 'destroyMovie',
    'click .closeForm' : 'closeForm',
    'click .up' : 'clickUp',
    'click .down' : 'clickDown',
    'click .right' : 'clickRight',
    'click .left' : 'clickLeft',
    'click .a' : 'clickA',
    'click .b' : 'clickB',
    'click .select' : 'clickSelect',
  },

  remove: function(e){
    this.$el.remove();
  },

  delete: function() {
    this.model.destroy();
    console.log('am I working?');
  },

  reload: function(e) {
    e.preventDefault;
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
    var stringy = JSON.stringify(["up", "down", "left", "right", "a", "b"]);
    var codeStringy = JSON.stringify(window.codeArray);
    if(codeStringy === stringy) {
      $('.formWrapper').removeClass('hidden');
      $('.close').removeClass('hidden');
    }
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
  },

  closeForm: function(e) {
    e.preventDefault();
    $('.formWrapper').addClass('hidden');
    $('.close').addClass('hidden');
    console.log('hi');
  },

  clickUp: function() {
    window.codeArray.push('up');
  },

  clickDown: function() {
    window.codeArray.push('down');
  },

  clickLeft: function() {
    window.codeArray.push('left');
  },

  clickRight: function() {
    window.codeArray.push('right');
  },

  clickA: function() {
    window.codeArray.push('a');
  },

  clickB: function() {
    window.codeArray.push('b');
  },

  clickSelect: function() {
    window.codeArray = [];
  }

})

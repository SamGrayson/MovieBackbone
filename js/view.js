var Backbone = require ('backbone');
var $ = require('jquery');
var _ = require ('underscore');
var PostView = require ('./modelView');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '.movies',
  events: {
    'click .titleSort': 'alertMe' , // <--------------- Events to add to your page... (<event> <class to do event> : <function on event>)
    'click .highestSort': 'alertMe',
    'click .lowestSort': 'alertMe'
  },
  initialize: function() {
    this.addAll();
  },
  alertMe: function() {
    alert("hi from alert");
  },
  logMe: function() {
    console.log("I'm being mouseovered");
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function(post) {
    var postView = new PostView({model: post});
    this.$el.append(postView.render().el);
  }
})

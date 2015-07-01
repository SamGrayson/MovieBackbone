var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieModel = require('./model');
var PostCollection = require ('./models');


module.exports = Backbone.View.extend({
  el: '.form',
  template: _.template($('#formTmpl').html()),
  initialize: function() {
    this.render();
  },
  events: {
      'click #submitForm': 'handleSubmit',
      'click #submitEdit': 'handleEdit'
  },
  render: function() {
    this.model = new MovieModel();
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log('hi');
   this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      rating: this.$el.find('input[name="score"]').val(),
      release: this.$el.find('input[name="release"]').val(),
      url: this.$el.find('input[name="url"]').val(),
      plot: this.$el.find('textarea[name="plot"]').val()
    });
    this.model.save();
  //  this.collect.add(this.model); // <------ VAT IS DIZ
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
  },
  handleEdit: function(e) {
    e.preventDefault();
    var collect = new PostCollection();
    collect.fetch().then(function () {    console.log(collect)
        var movieTitle = $('.form').find('input[name="title"]').val()
        var movieToEdit = collect.findWhere({title: movieTitle});

    movieToEdit.set({
      title: $('.form').find('input[name="title"]').val(),
      url: $('.form').find('input[name="url"]').val(),
      plot: $('.form').find('textarea[name="plot"]').val(),
      release: $('.form').find('input[name="release"]').val(),
      rating: $('.form').find('input[name="score"]').val()
    });
    movieToEdit.save();
    console.log(movieToEdit);
    $('.form').find('input').val('');
    $('.form').find('textarea').val('');
    });
  },

});

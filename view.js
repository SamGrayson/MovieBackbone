var PostView = Backbone.View.extend({

  template: _.template($('#postTmpl').html()), // <------------ Gets your template
  initialize: function(options) {
    console.log('our model view is created');
  },

  render: function () {
    var tmpl = this.template(this.model.toJSON());
    this.$el.html(tmpl);
    return this;
  }

});

var TitleView = Backbone.View.extend({
  el: '.sort',
  events: {
    "click #titleSort": "sortTitle" , // <--------------- Events to add to your page... (<event> <class to do event> : <function on event>)
    'click #highestSort': 'sortHighest',
    'click #lowestSort': 'sortLowest'
  },
  sortTitle: function(event) {
    $('.movies').html('');
    collectionView = new PostCollectionView({collection: myCollectionTitle});
  },
  sortHighest: function(event) {
    $('.movies').html('');
    collectionView = new PostCollectionView({collection: myCollectionHigh});
  },
  sortLowest: function(event) {
    $('.movies').html('');
    collectionView = new PostCollectionView({collection: myCollectionLow});
  }
})

var PostCollectionView = Backbone.View.extend({
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

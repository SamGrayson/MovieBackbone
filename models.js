var array = [];

var PostModel = Backbone.Model.extend({

  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/movies10',
  idAttribute: '_id',
  initialize: function() {
    console.log('adding movie')
  }

});

var PostCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/movies10'
});

////////////// Server Manipulation ///////////////

var collect = new PostCollection();
collect.fetch();

///////////// Updates Server with Movie Data Array //////////////

function updateServer() {
  console.log(collect.length);
  loopServer();
}

function loopServer() {
  if (collect.length === 0) {
    _.each(movieData, function(el) {
        var newPost = new PostModel(el);
        newPost.save();
        collect = new PostCollection();
        collect.fetch();
      })
  }
  else if (collect.length < movieData.length) {
    console.log("I'm running 2");
    for (var i = 0; i < collect.length; i++) {
      var movieTitle = collect.at(i).get('title')
      array.push(movieTitle);
    }
      console.log(array);
      _.each(movieData, function(el) {
          if (_.contains(array, el.title) !== true) {
          var newPost = new PostModel(el);
          newPost.save();
        }
      })
    }
}

function changeTitle() {
  var movie = prompt('What movie do you want to change?');
  var newTitle = prompt('What should the title be?');
  var titleToChange = collect.findWhere({title: movie});
  console.log(titleToChange.attributes);
  titleToChange.set({title: newTitle});
  titleToChange.save();
}

function changeRating() {
  var movie = prompt('What movie do you want to change?');
  var newRating = prompt('What should the rating be?');
  var ratingToChange = collect.findWhere({title: movie});
  console.log(ratingToChange.attributes);
  ratingToChange.set({rating: newRating});
  ratingToChange.save();
}

///////// Delete Stuff /////////

function deletePost() {
  var movieTitle = prompt('Title of your deletion?')
  var posttoDelete = collect.findWhere({title: movieTitle})
  whichDeletePost(posttoDelete);
}

function whichDeletePost(posttoDelete) {
  var movie = posttoDelete
  movie.destroy();
}

///////// Delete All ///////////

function deleteAll() {
  _.each(_.clone(collect.models), function(model) {
    model.destroy();
  })
};

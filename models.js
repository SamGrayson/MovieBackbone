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

var collect = new PostCollection();
collect.fetch();

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

function deletePost() {
  var movieTitle = prompt('Title of your deletion?')
  var posttoDelete = collect.findWhere({title: movieTitle})
  whichDeletePost(posttoDelete);
}

function whichDeletePost(posttoDelete) {
  var movie = posttoDelete
  movie.destroy();
}

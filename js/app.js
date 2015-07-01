var Collections = require('./models');
var PostCollectionView = require('./view');
var $ = require('jquery');
var PostCollection = require ('./models');
var PostView = require ('./modelView');
var Events = require ('./events');
var Forms = require ('./formView');
var Backbone = require ('backbone');
var _ = require ('underscore');
var PostModel = require ('./model');
var Router = require('./router');
Backbone.$ = $;

var movieData = [
  {
    title: "Jurassic World",
    rating: 4.0,
    release: 'June 2015',
    plot: "A bunch of people being eaten by dinosaurs...no really that's what it is. I highly suggest it",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTQ5MTE0MTk3Nl5BMl5BanBnXkFtZTgwMjczMzk2NTE@._V1__SX671_SY660_.jpg',
    actors: 'Chris Pratt, Bryce Dallas Howard, Ty Simpkins, Judy Greer',
    rated: 'PG-13',
    genre: 'Action | Adventure | Sci-Fi | Thriller'
  },
  {
    title: "Ex-Machina",
    rating: 4.2,
    release: 'May 2015',
    plot: "Some dude gets obsessed with a robot chick...",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1__SX671_SY660_.jpg',
    actors: 'Alicia Vikander, Domhnall Gleeson, Oscar Isaac',
    rated: 'R',
    genre: 'Drama | Sci-Fi'
  },
  {
    title: "Terminator Genesis",
    rating: 3.8,
    release: 'July 2015',
    plot: "He said he'll be back...He was correct! Watch arnold pump some robo-roids and kick some ***",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTQ3OTY2ODY4NV5BMl5BanBnXkFtZTgwNjA1ODQyNDE@._V1__SX640_SY720_.jpg',
    actors: 'Arnold Schwarzenegger, Jason Clarke, Emilia Clarke, Jai Courtney',
    rated: 'PG-13',
    genre: 'Action | Adventure | Sci-Fi | Thriller'
  },
  {
    title: "Ted 2",
    rating: 3.6,
    release: 'June 2015',
    plot: "A man becomes attached to a teddy bear that slowly but surely ruins his life...and farts a lot",
    url: 'http://ia.media-imdb.com/images/M/MV5BMjEwMDg3MDk1NF5BMl5BanBnXkFtZTgwNjYyODA1NTE@._V1__SX671_SY660_.jpg',
    actors: 'Mark Wahlberg, Seth MacFarlane, Amanda Seyfried, Jessica Barth',
    rated: 'R',
    genre: 'Comedy'
  },
  {
    title: "Inside Out",
    rating: 3.9,
    release: 'June 2015',
    plot: "In this horror movie by pixar you are taken into the mind of a pre-teen girl..",
    url: 'http://ia.media-imdb.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1__SX671_SY660_.jpg',
    actors: 'Amy Poehler, Bill Hader, Lewis Black, Mindy Kaling',
    rated: 'R',
    genre: 'Animation | Horror | Drama | Family'
  },
  {
    title: "Mad Max",
    rating: 4.5,
    release: 'May 2015',
    plot: "He's mad, and his name is Max! Watch a bunch of ridiculous explosions, off the wall effects, and Tom Hardy mumble for 2 hours!",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1__SX673_SY645_.jpg',
    actors: 'Tom Hardy, Charlize Theron, Nicholas Hoult, Zoë Kravitz',
    rated: 'R',
    genre: 'Action | Adventure | Sci-Fi | Thriller'
  }
];



module.exports = $(function() {

  var collection = new PostCollection();

  var newForms = new Forms();

  var newEvents = new Events();

  new Router();

  Backbone.history.start(); // <---------- Tells the router to start working with the app.

//  var myCollection = new PostCollection(movieData);


/*  myCollection.fetch().then(function (data) {
    collectionView = new PostCollectionView({collection: myCollection});
  })
*/

  ////////////// Server Manipulation ///////////////

  window.codeArray = [];

  var collect = new PostCollection();
  collect.fetch();

  ///////////// Updates Server with Movie Data Array //////////////

  window.updateServer = function() {
    console.log(collect.length);
    loopServer();
  }

  window.loopServer = function() {
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

/*  function changeTitle() {
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

  */

  ///////// Delete Stuff /////////

/*  function deletePost() {
    var movieTitle = prompt('Title of your deletion?')
    var posttoDelete = collect.findWhere({title: movieTitle})
    whichDeletePost(posttoDelete);
  }

  function whichDeletePost(posttoDelete) {
    var movie = posttoDelete
    movie.destroy();
  }

*/

  ///////// Delete All ///////////

  window.deleteAll = function() {
    _.each(_.clone(collect.models), function(model) {
      model.destroy();
    })
  };

});

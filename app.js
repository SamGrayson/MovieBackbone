var myView;
var myModel;
var movieData = [
  {
    title: "Jurassic World",
    rating: 4.0,
    release: 'June 2015',
    plot: "A bunch of people being eaten by dinosaurs...no really that's what it is. I highly suggest it",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTQ5MTE0MTk3Nl5BMl5BanBnXkFtZTgwMjczMzk2NTE@._V1__SX671_SY660_.jpg'
  },
  {
    title: "Ex-Machina",
    rating: 4.2,
    release: 'May 2015',
    plot: "Some dude gets obsessed with a robot chick...",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1__SX671_SY660_.jpg'
  },
  {
    title: "Terminator Genesis",
    rating: 3.8,
    release: 'July 2015',
    plot: "He said he'll be back...He was correct! Watch arnold pump some robo-roids and kick some ***",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTQ3OTY2ODY4NV5BMl5BanBnXkFtZTgwNjA1ODQyNDE@._V1__SX640_SY720_.jpg'
  },
  {
    title: "Ted 2",
    rating: 3.6,
    release: 'June 2015',
    plot: "A man becomes attached to a teddy bear that slowly but surely ruins his life...and farts a lot",
    url: 'http://ia.media-imdb.com/images/M/MV5BMjEwMDg3MDk1NF5BMl5BanBnXkFtZTgwNjYyODA1NTE@._V1__SX671_SY660_.jpg'
  },
  {
    title: "Inside Out",
    rating: 3.9,
    release: 'June 2015',
    plot: "In this horror movie by pixar you are taken into the mind of a pre-teen girl..",
    url: 'http://ia.media-imdb.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1__SX671_SY660_.jpg'
  },
  {
    title: "Mad Max",
    rating: 4.5,
    release: 'May 2015',
    plot: "He's mad, and his name is Max! Watch a bunch of ridiculous explosions, off the wall effects, and Tom Hardy mumble for 2 hours!",
    url: 'http://ia.media-imdb.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1__SX673_SY645_.jpg'
  }
];

var sortedByTitle = _.sortBy(movieData, 'title');

var sortedByLowest = _.sortBy(movieData, 'rating');

var sortedByHighest = _.sortBy(movieData, 'rating').reverse();

var myCollection;

$(function() {


  myCollection = new PostCollection(movieData);

  myCollectionTitle = new PostCollection(sortedByTitle);

  myCollectionHigh = new PostCollection(sortedByHighest);

  myCollectionLow = new PostCollection(sortedByLowest);

  myCollection.fetch().then(function (data) {
    collectionView = new PostCollectionView({collection: myCollection});
  })

  myView = new PostView ({ model: myModel});

  myTitle = new TitleView ();

})

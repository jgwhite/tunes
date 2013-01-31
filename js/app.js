window.App = Ember.Application.create();

// Router

App.Router.map(function() {
  this.resource('artists', function() {
    this.resource('artist', { path: ':artist_id' });
  });
});

// Store

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

// Models

App.Artist = DS.Model.extend({
  name: DS.attr('string'),
  albums: DS.hasMany('App.Album')
});

App.Album = DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.belongsTo('App.Artist'),
  tracks: DS.hasMany('App.Track')
});

App.Track = DS.Model.extend({
  name: DS.attr('string'),
  duration: DS.attr('number'),
  album: DS.belongsTo('App.Album')
});

// Data

App.Artist.FIXTURES = [{
  id: 'animal-collective',
  name: 'Animal Collective',
  albums: [
    'sung-tongs'
  ]
}];

App.Album.FIXTURES = [{
  id: 'sung-tongs',
  name: 'Sung Tongs',
  artist: 'animal-collective',
  tracks: [
    'leaf-house',
    'who-could-win-a-rabbit',
    'the-softest-voice',
    'winters-love',
    'kids-on-holiday',
    'sweet-road',
    'visiting-friends',
    'college',
    'we-tigers',
    'mouth-wooed-her',
    'good-lovin-outside',
    'whaddit-i-done'
  ]
}];

App.Track.FIXTURES = [{
  id: 'leaf-house',
  name: 'Leaf House',
  duration: 162,
  album: 'sung-tongs'
}, {
  id: 'who-could-win-a-rabbit',
  name: 'Who Could Win a Rabbit',
  duration: 138,
  album: 'sung-tongs'
}, {
  id: 'the-softest-voice',
  name: 'The Softest Voice',
  duration: 406,
  album: 'sung-tongs'
}, {
  id: 'winters-love',
  name: 'Winters Love',
  duration: 295,
  album: 'sung-tongs'
}, {
  id: 'kids-on-holiday',
  name: 'Kids on Holiday',
  duration: 347,
  album: 'sung-tongs'
}, {
  id: 'sweet-road',
  name: 'Sweet Road',
  duration: 75,
  album: 'sung-tongs'
}, {
  id: 'visiting-friends',
  name: 'Visiting Friends',
  duration: 756,
  album: 'sung-tongs'
}, {
  id: 'college',
  album: 'sung-tongs',
  duration: 53,
  name: 'College'
}, {
  id: 'we-tigers',
  name: 'We Tigers',
  duration: 163,
  album: 'sung-tongs'
}, {
  id: 'mouth-wooed-her',
  name: 'Mouth Wooed Her',
  duration: 264,
  album: 'sung-tongs'
}, {
  id: 'good-lovin-outside',
  name: 'Good Lovin Outside',
  duration: 266,
  album: 'sung-tongs'
}, {
  id: 'whaddit-i-done',
  name: 'Whaddit I Done',
  duration: 245,
  album: 'sung-tongs'
}];

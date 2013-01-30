window.App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

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

App.Artist.FIXTURES = [{
  id: 1,
  name: 'Animal Collective',
  albums: [1]
}];

App.Album.FIXTURES = [{
  id: 1,
  name: 'Sung Tongs',
  artist: 1,
  tracks: [1, 2, 3, 4]
}];

App.Track.FIXTURES = [{
  id: 1,
  name: 'Leaf House',
  duration: 162,
  album: 1
}, {
  id: 2,
  name: 'Who Could Win a Rabbit',
  duration: 138,
  album: 1
}, {
  id: 3,
  name: 'The Softest Voice',
  duration: 406,
  album: 1
}, {
  id: 4,
  name: 'Winters Love',
  duration: 295,
  album: 1
// 'Kids on Holiday' – 5:47
// 'Sweet Road' – 1:15
// 'Visiting Friends' – 12:36
// 'College' – 0:53
// 'We Tigers' – 2:43
// 'Mouth Wooed Her' – 4:24
// 'Good Lovin Outside' – 4:26
// 'Whaddit I Done' – 4:05
}];

window.App = Ember.Application.create();

// Router

App.Router.map(function() {
  this.resource('artist', { path: ':artist_id' }, function() {
    this.resource('album', { path: ':album_id' }, function() {
      this.resource('track', { path: ':track_id' });
    });
  });
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('artists').set('model', App.Artist.find());
  }
});


// Controllers

App.ArtistsController = Ember.ArrayController.extend();


// Helpers

Ember.Handlebars.registerBoundHelper('timecode', function(value) {
  if (value) return moment.duration(value, 'seconds').timecode();
});

moment.duration.fn.timecode = function() {
  var m = this.minutes().toString(),
      s = this.seconds().toString();

  if (s.length < 1) s = '0' + s;

  return m + ':' + s;
}


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
  artwork: DS.attr('string'),
  artist: DS.belongsTo('App.Artist'),
  tracks: DS.hasMany('App.Track')
});

App.Track = DS.Model.extend({
  name: DS.attr('string'),
  duration: DS.attr('number'),
  album: DS.belongsTo('App.Album')
});

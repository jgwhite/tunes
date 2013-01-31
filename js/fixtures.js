App.Artist.FIXTURES = [{
  id: 'animal-collective',
  name: 'Animal Collective',
  albums: [
    'sung-tongs',
    'feels'
  ]
}];

App.Album.FIXTURES = [{
  id: 'sung-tongs',
  name: 'Sung Tongs',
  artwork: 'img/sung-tongs.jpg',
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
}, {
  id: 'feels',
  name: 'Feels',
  artwork: 'img/feels.jpg',
  artist: 'animal-collective',
  tracks: [
    'did-you-see-the-words',
    'grass',
    'flesh-canoe',
    'the-purple-bottle',
    'bees',
    'banshee-beat',
    'daffy-duck',
    'loch-raven',
    'turn-into-something'
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
}, {
  id: 'did-you-see-the-words',
  name: 'Did You See The Words',
  duration: 315,
  album: 'feels'
}, {
  id: 'grass',
  name: 'Grass',
  duration: 180,
  album: 'feels'
}, {
  id: 'flesh-canoe',
  name: 'Flesh Canoe',
  duration: 224,
  album: 'feels'
}, {
  id: 'the-purple-bottle',
  name: 'The Purple Bottle',
  duration: 408,
  album: 'feels'
}, {
  id: 'bees',
  name: 'Bees',
  duration: 339,
  album: 'feels'
}, {
  id: 'banshee-beat',
  name: 'Banshee Beat',
  duration: 502,
  album: 'feels'
}, {
  id: 'daffy-duck',
  name: 'Daffy Duck',
  duration: 455,
  album: 'feels'
}, {
  id: 'loch-raven',
  name: 'Loch Raven',
  duration: 299,
  album: 'feels'
}, {
  id: 'turn-into-something',
  name: 'Turn Into Something',
  duration: 390,
  album: 'feels'
}];

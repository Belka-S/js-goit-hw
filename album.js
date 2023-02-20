//  ******************** Depeche Mode ********************

const album = {
  band: 'Depeche Mode',
  title: 'viOLator',
  year: 1990,
  genre: 'electronic',
  rating: 8,
  tracks: [
    'World In my eyes',
    'Sweetest Perfection',
    'Personal Jesus',
    'Halo',
    'Waiting FOR the night',
    'Enjoy the Silence',
    'Policy of Truth',
    'Blue Dress',
    'Clean',
  ],

  normalize(string) {
    const lowerCase = ['and', 'for', 'in', 'of', 'the', 'with'];

    const normalArray = string.trim().toLowerCase().split(/\s+/);
    for (const word of normalArray) {
      let normalWord = word.at(0).toUpperCase() + word.substring(1);
      if (normalArray.indexOf(word) > 0) {
        for (const lower of lowerCase) {
          if (lower === word) {
            normalWord = lower;
            break;
          }
        }
      }
      normalArray.splice(normalArray.indexOf(word), 1, normalWord);
    }
    return normalArray.join(' ');
  },

  normalizeAlbum() {
    this.title = this.normalize(this.title);

    const tracks = [...this.tracks];
    for (const track of tracks) {
      this.tracks.splice(tracks.indexOf(track), 1, this.normalize(track));
    }
  },

  albumInfo() {
    const { band, title, year, genre, rating, track } = album;
    console.log('Band:', band);
    console.log('Year: ', year);
    console.log('Title: ', title);
    console.log('Genre: ', genre);
    console.log('Rating: ', rating);
    console.log('Tracks:');
    this.trackList();
  },

  addTrack(trackNumber, tracktitle) {
    this.tracks.splice(trackNumber, 0, tracktitle);
  },

  changeRating(newRating) {
    this.rating = newRating;
  },

  trackList() {
    for (const track of this.tracks) {
      console.log(
        `${String(this.tracks.indexOf(track) + 1).padStart(2, 0)} - ${track}`
      );
    }
  },
};
// -----------------------------------------------------------------------------

// album.addTrack(6, 'Interlude #2 Crucified');
// album.addTrack(9, 'Interlude #3');
// album.changeRating(10);
// album.normalizeAlbum();
// album.albumInfo();
// console.log('-----------------------');
// console.log(album.normalize('songs OF faith AND deVOtion'));

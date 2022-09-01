// How to begin:
// Create a new HTML/CSS/JS and complete the following in your .js file
// Make a radio Object.Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly.
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

// Submission: Submit a share link of your repl file here!

// Happy coding!

const song1 = {
  title: "Three Little Birds",
  artist: "Bob Marley",
};

const song2 = {
  title: "So Fresh, So Clean",
  artist: "Outkast",
};

const song3 = {
  title: "Synergy",
  artist: "Dance Gavin Dance",
};

let station1 = {
  name: "100.3 The Project",
  song: [song1, song2, song3],
};

let station2 = {
  name: "101.1 The Wiz",
  song: [song1, song2, song3],
};

let station3 = {
  name: "Mojo 94.9",
  song: [song1, song2, song3],
};

let radio = {
  stations: [station1, station2, station3],

  changeChannel: () => {
    // Need to console log song, title and artist
    // console.log(station2);
    let channel = Math.floor(Math.random() * 3);
    let track = Math.floor(Math.random() * 3);
    console.log(
      `Now playing ${radio.stations[channel].song[track].title} by ${radio.stations[channel].song[track].artist}.`
    );
  },
};

radio.changeChannel();

// console.log(radio.changeChannel(0, 2));
// let currentChan = radio.stations[radio.changeChannel(0, 2)];

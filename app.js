'use strict';

const musicPlayer = {
  songId: 12,
  play: function(id = this.songId) {
    console.log(`Playing song with the ID: ${id}`);
  },
};

musicPlayer.remove = function(id = this.songId) {
  console.log(`Removing from the playlist, ID: ${id}`);
};

musicPlayer.play();
musicPlayer.remove()

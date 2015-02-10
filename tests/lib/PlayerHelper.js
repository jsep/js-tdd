beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expectedSong) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expectedSong && player.isPlaying
          }
        }
      };
    }
  });
});

System.register(["app/spotify/artist", "app/spotify/album"], function (_export) {
  "use strict";

  var Artist, Album, Track;
  return {
    setters: [function (_appSpotifyArtist) {
      Artist = _appSpotifyArtist.Artist;
    }, function (_appSpotifyAlbum) {
      Album = _appSpotifyAlbum.Album;
    }],
    execute: function () {
      Track = function Track(http) {
        var _this = this;
        var data = arguments[1] === undefined ? {} : arguments[1];
        this._debug = data;
        this.http = http;

        this.id = data.id;
        this.genres = data.genres || [];
        this.href = data.href = "";
        this.name = data.name || "";
        this.popularity = data.popularity || 0;
        this.uri = data.uri || "";
        this.discNumber = data.disc_number;
        this.trackNumber = data.track_number;
        this.explicit = data.explicit;
        this.duration = data.duration_ms;
        this.previewUrl = data.preview_url;

        this.album = new Album(http, data.album);
        this.artist = new Artist(http, data.artist);

        this.isFull = "popularity " in data;

        this.fill = function (force) {
          if (!force && (_this.href === undefined || _this.href.length === 0 || _this.isFull)) return;
          http.get(_this.href).then(function (result) {
            console.log(result);
          });
        };
      };

      _export("Track", Track);
    }
  };
});
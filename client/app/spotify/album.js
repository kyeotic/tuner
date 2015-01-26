System.register(["app/spotify/artist", "app/spotify/track", "app/spotify/pager"], function (_export) {
  "use strict";

  var Artist, Track, Pager, Album;
  return {
    setters: [function (_appSpotifyArtist) {
      Artist = _appSpotifyArtist["default"];
    }, function (_appSpotifyTrack) {
      Track = _appSpotifyTrack["default"];
    }, function (_appSpotifyPager) {
      Pager = _appSpotifyPager["default"];
    }],
    execute: function () {
      Album = function Album(http) {
        var _this = this;
        var data = arguments[1] === undefined ? {} : arguments[1];
        this._debug = data;
        this.http = http;

        this.id = data.id;
        this.type = data.album_type || "album";
        this.artists = data.artists ? data.artists.map(function (a) {
          return new Artist(http, a);
        }) : [];

        this.genres = data.genres || [];
        this.href = data.href = "";
        this.images = data.images || [];
        this.name = data.name || "";
        this.popularity = data.popularity || 0;
        this.uri = data.uri || "";

        this.releaseDate = data.release_date;
        this.tracks = new Pager(http, data.tracks, Track);


        this.isFull = "popularity" in data;

        this.fill = function (force) {
          if (!force && (_this.href === undefined || _this.href.length === 0 || _this.isFull)) return;
          http.get(_this.href).then(function (result) {
            console.log(result);
          });
        };
      };

      _export("Album", Album);
    }
  };
});
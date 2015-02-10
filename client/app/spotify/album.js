System.register(["app/spotify/artist", "app/spotify/track", "app/spotify/pager"], function (_export) {
  "use strict";

  var Artist, Track, Pager, _prototypeProperties, Album;
  return {
    setters: [function (_appSpotifyArtist) {
      Artist = _appSpotifyArtist.Artist;
    }, function (_appSpotifyTrack) {
      Track = _appSpotifyTrack.Track;
    }, function (_appSpotifyPager) {
      Pager = _appSpotifyPager.Pager;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Album = (function () {
        function Album(http) {
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

          this.artUrl = this.images[0] ? this.images[0].url : "";
          if (data.tracks) this.tracks = new Pager(http, data.tracks, Track);


          this.isFull = "popularity" in data;
        }

        _prototypeProperties(Album, null, {
          fill: {
            value: function fill(force) {
              if (!force && (this.href === undefined || this.href.length === 0 || this.isFull)) return;
              this.http.get(this.href).then(function (result) {
                console.log(result);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Album;
      })();
      _export("Album", Album);
    }
  };
});
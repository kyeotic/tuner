System.register(["app/spotify/album", "app/spotify/artist", "app/spotify/track"], function (_export) {
  "use strict";

  var Album, Artist, Track, _prototypeProperties, SearchResult;
  return {
    setters: [function (_appSpotifyAlbum) {
      Album = _appSpotifyAlbum.Album;
    }, function (_appSpotifyArtist) {
      Artist = _appSpotifyArtist.Artist;
    }, function (_appSpotifyTrack) {
      Track = _appSpotifyTrack.Track;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      SearchResult = (function () {
        function SearchResult() {}

        _prototypeProperties(SearchResult, null, {
          getViewStrategy: {
            value: function getViewStrategy() {
              switch (this.pager.type) {
                case Album:
                  return "app/search/results/album.html";
                case Artist:
                  return "app/search/results/artist.html";
                case Track:
                  return "app/search/results/track.html";
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          activate: {
            value: function activate(pager) {
              this.pager = pager;
              this.items = pager.items;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return SearchResult;
      })();
      _export("SearchResult", SearchResult);
    }
  };
});
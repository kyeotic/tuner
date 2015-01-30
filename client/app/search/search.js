System.register(["app/spotify/service", "app/search/album-search-result", "app/search/artist-search-result", "app/search/track-search-result"], function (_export) {
  "use strict";

  var spotify, AlbumSearchResult, ArtistSearchResult, TrackSearchResult, _prototypeProperties, Search;
  return {
    setters: [function (_appSpotifyService) {
      spotify = _appSpotifyService["default"];
    }, function (_appSearchAlbumSearchResult) {
      AlbumSearchResult = _appSearchAlbumSearchResult.AlbumSearchResult;
    }, function (_appSearchArtistSearchResult) {
      ArtistSearchResult = _appSearchArtistSearchResult.ArtistSearchResult;
    }, function (_appSearchTrackSearchResult) {
      TrackSearchResult = _appSearchTrackSearchResult.TrackSearchResult;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Search = (function () {
        function Search() {
          var _this = this;
          this.tabs = [];
          this.query = "";
          Object.defineProperty(this, "hasQuery", {
            get: function () {
              return _this.query !== undefined && _this.query.length > 2;
            }
          });
        }

        _prototypeProperties(Search, null, {
          activate: {
            value: function activate(params, query) {
              var _this2 = this;
              this.query = query.q || "";
              return spotify.search(this.query).then(function (results) {
                _this2.tabs = [{ header: "Artists", model: new ArtistSearchResult(results.artists) }, { header: "Tracks", model: new TrackSearchResult(results.tracks) }];
                _this2.album = results.albums;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Search;
      })();
      _export("Search", Search);
    }
  };
});
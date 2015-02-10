System.register(["aurelia-http-client", "app/core/util", "app/spotify/artist", "app/spotify/track", "app/spotify/album", "app/spotify/pager"], function (_export) {
  "use strict";

  var HttpClient, Util, Artist, Track, Album, Pager, _prototypeProperties, Spotify;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_appCoreUtil) {
      Util = _appCoreUtil.Util;
    }, function (_appSpotifyArtist) {
      Artist = _appSpotifyArtist.Artist;
    }, function (_appSpotifyTrack) {
      Track = _appSpotifyTrack.Track;
    }, function (_appSpotifyAlbum) {
      Album = _appSpotifyAlbum.Album;
    }, function (_appSpotifyPager) {
      Pager = _appSpotifyPager.Pager;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Spotify = (function () {
        function Spotify(http) {
          this.http = new HttpClient("https://api.spotify.com/v1");
          this.baseUrl = "https://api.spotify.com/";
        }

        _prototypeProperties(Spotify, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          search: {
            value: function search(query) {
              var _this = this;
              var type = arguments[1] === undefined ? ["album", "artist", "track"] : arguments[1];
              return this.http.get("search?" + Util.toQueryString({ q: query }) + "&type=" + type.join(",")).then(function (results) {
                return {
                  artists: new Pager(_this.http, results.content.artists, Artist),
                  albums: new Pager(_this.http, results.content.albums, Album),
                  tracks: new Pager(_this.http, results.content.tracks, Track)
                };
              })["catch"](Util.logError);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getAlbum: {
            value: function getAlbum(id) {
              var _this2 = this;
              return this.http.get("albums/" + id).then(function (result) {
                return new Album(_this2.http, result.content);
              })["catch"](Util.logError);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Spotify;
      })();
      _export("default", new Spotify());
    }
  };
});
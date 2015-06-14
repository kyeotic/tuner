System.register(['aurelia-http-client', 'core/util', 'spotify/artist', 'spotify/track', 'spotify/album', 'spotify/pager'], function (_export) {
  var HttpClient, Util, Artist, Track, Album, Pager, Spotify;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_coreUtil) {
      Util = _coreUtil.Util;
    }, function (_spotifyArtist) {
      Artist = _spotifyArtist.Artist;
    }, function (_spotifyTrack) {
      Track = _spotifyTrack.Track;
    }, function (_spotifyAlbum) {
      Album = _spotifyAlbum.Album;
    }, function (_spotifyPager) {
      Pager = _spotifyPager.Pager;
    }],
    execute: function () {
      'use strict';

      Spotify = (function () {
        function Spotify(http) {
          _classCallCheck(this, Spotify);

          this.http = new HttpClient('https://api.spotify.com/v1');
          this.baseUrl = 'https://api.spotify.com/';
        }

        _createClass(Spotify, [{
          key: 'search',
          value: function search(query) {
            var _this = this;

            var type = arguments[1] === undefined ? ['album', 'artist', 'track'] : arguments[1];

            return this.http.get('search?' + Util.toQueryString({ q: query }) + '&type=' + type.join(',')).then(function (results) {
              return {
                artists: new Pager(_this.http, results.content.artists, Artist),
                albums: new Pager(_this.http, results.content.albums, Album),
                tracks: new Pager(_this.http, results.content.tracks, Track)
              };
            })['catch'](Util.logError);
          }
        }, {
          key: 'getAlbum',
          value: function getAlbum(id) {
            var _this2 = this;

            return this.http.get('albums/' + id).then(function (result) {
              return new Album(_this2.http, result.content);
            })['catch'](Util.logError);
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [HttpClient];
          }
        }]);

        return Spotify;
      })();

      _export('default', new Spotify());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FEQU9NLE9BQU87Ozs7Ozs7O3NDQVBMLFVBQVU7O3VCQUNWLElBQUk7OzhCQUNKLE1BQU07OzRCQUNOLEtBQUs7OzRCQUNMLEtBQUs7OzRCQUNMLEtBQUs7Ozs7O0FBRVAsYUFBTztBQUdBLGlCQUhQLE9BQU8sQ0FHQyxJQUFJLEVBQUU7Z0NBSGQsT0FBTzs7QUFJVCxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDekQsY0FBSSxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztTQUMzQzs7cUJBTkcsT0FBTzs7aUJBU0wsZ0JBQUMsS0FBSyxFQUF1Qzs7O2dCQUFyQyxJQUFJLGdDQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7O0FBRS9DLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDekYsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2YscUJBQU87QUFDSCx1QkFBTyxFQUFFLElBQUksS0FBSyxDQUFDLE1BQUssSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztBQUM5RCxzQkFBTSxFQUFHLElBQUksS0FBSyxDQUFDLE1BQUssSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUM1RCxzQkFBTSxFQUFHLElBQUksS0FBSyxDQUFDLE1BQUssSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztlQUMvRCxDQUFDO2FBQ0gsQ0FBQyxTQUNJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ3pCOzs7aUJBRU8sa0JBQUMsRUFBRSxFQUFFOzs7QUFDWixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBVyxFQUFFLENBQUcsQ0FDbEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtxQkFBSSxJQUFJLEtBQUssQ0FBQyxPQUFLLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQUEsQ0FBQyxTQUMvQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUN2Qjs7O2lCQXhCWSxrQkFBRztBQUFFLG1CQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7V0FBRTs7O2VBRnBDLE9BQU87Ozt5QkE2QkUsSUFBSSxPQUFPLEVBQUUiLCJmaWxlIjoic3BvdGlmeS9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC8ifQ==
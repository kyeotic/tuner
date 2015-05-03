System.register(['app/spotify/album', 'app/spotify/artist', 'app/spotify/track'], function (_export) {
  var Album, Artist, Track, SearchResult;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  return {
    setters: [function (_appSpotifyAlbum) {
      Album = _appSpotifyAlbum.Album;
    }, function (_appSpotifyArtist) {
      Artist = _appSpotifyArtist.Artist;
    }, function (_appSpotifyTrack) {
      Track = _appSpotifyTrack.Track;
    }],
    execute: function () {
      'use strict';

      SearchResult = (function () {
        function SearchResult() {
          _classCallCheck(this, SearchResult);
        }

        _createClass(SearchResult, [{
          key: 'getViewStrategy',
          value: function getViewStrategy() {
            switch (this.pager.type) {
              case Album:
                return 'app/search/results/album.html';
              case Artist:
                return 'app/search/results/artist.html';
              case Track:
                return 'app/search/results/track.html';
            }
          }
        }, {
          key: 'activate',
          value: function activate(pager) {
            this.pager = pager;
            this.items = pager.items;
          }
        }]);

        return SearchResult;
      })();

      _export('SearchResult', SearchResult);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9zZWFyY2gtcmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7NEJBSWEsWUFBWTs7Ozs7Ozs7K0JBSmpCLEtBQUs7O2lDQUNMLE1BQU07OytCQUNOLEtBQUs7Ozs7O0FBRUEsa0JBQVk7aUJBQVosWUFBWTtnQ0FBWixZQUFZOzs7cUJBQVosWUFBWTs7aUJBQ0wsMkJBQUU7QUFDaEIsb0JBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO0FBQ3JCLG1CQUFLLEtBQUs7QUFBRSx1QkFBTywrQkFBK0IsQ0FBQztBQUFBLEFBQ25ELG1CQUFLLE1BQU07QUFBRSx1QkFBTyxnQ0FBZ0MsQ0FBQztBQUFBLEFBQ3JELG1CQUFLLEtBQUs7QUFBRSx1QkFBTywrQkFBK0IsQ0FBQztBQUFBLGFBQ3BEO1dBQ0Y7OztpQkFDTyxrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztXQUMxQjs7O2VBWFEsWUFBWTs7OzhCQUFaLFlBQVkiLCJmaWxlIjoic2VhcmNoL3NlYXJjaC1yZXN1bHQuanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50LyJ9
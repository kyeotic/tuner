System.register(['app/spotify/artist', 'app/spotify/album'], function (_export) {
  'use strict';

  var Artist, Album, Track;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

        _classCallCheck(this, Track);

        this._debug = data;
        this.http = http;

        this.id = data.id;
        this.genres = data.genres || [];
        this.href = data.href = '';
        this.name = data.name || '';
        this.popularity = data.popularity || 0;
        this.uri = data.uri || '';
        this.discNumber = data.disc_number;
        this.trackNumber = data.track_number;
        this.explicit = data.explicit;
        this.duration = data.duration_ms;
        this.previewUrl = data.preview_url;

        this.album = new Album(http, data.album);
        this.artist = new Artist(http, data.artists[0]);

        this.isFull = 'popularity ' in data;

        this.fill = function (force) {
          if (!force && (_this.href === undefined || _this.href.length === 0 || _this.isFull)) return;
          http.get(_this.href).then(function (result) {
            console.log(result);
          });
        };
      };

      _export('Track', Track);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkvdHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQUdhLEtBQUs7Ozs7OztpQ0FIVixNQUFNOzsrQkFDTixLQUFLOzs7QUFFQSxXQUFLLEdBQ0wsU0FEQSxLQUFLLENBQ0osSUFBSSxFQUFhOzs7WUFBWCxJQUFJLGdDQUFHLEVBQUU7OzhCQURoQixLQUFLOztBQUVkLFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUdqQixZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDbEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNoQyxZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7QUFDNUIsWUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztBQUN2QyxZQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0FBQzFCLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNuQyxZQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDckMsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzlCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNqQyxZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7O0FBRW5DLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhELFlBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQzs7QUFHcEMsWUFBSSxDQUFDLElBQUksR0FBRyxVQUFDLEtBQUssRUFBSztBQUNyQixjQUFJLENBQUMsS0FBSyxLQUFLLE1BQUssSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFLLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQUssTUFBTSxDQUFBLEFBQUMsRUFBRSxPQUFPO0FBQ3pGLGNBQUksQ0FBQyxHQUFHLENBQUMsTUFBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDakMsbUJBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDckIsQ0FBQyxDQUFBO1NBQ0gsQ0FBQTtPQUNGOzt1QkE5QlUsS0FBSyIsImZpbGUiOiJzcG90aWZ5L3RyYWNrLmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC8ifQ==
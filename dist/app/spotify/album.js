System.register(['app/spotify/artist', 'app/spotify/track', 'app/spotify/pager'], function (_export) {
    'use strict';

    var Artist, Track, Pager, Album;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_appSpotifyArtist) {
            Artist = _appSpotifyArtist.Artist;
        }, function (_appSpotifyTrack) {
            Track = _appSpotifyTrack.Track;
        }, function (_appSpotifyPager) {
            Pager = _appSpotifyPager.Pager;
        }],
        execute: function () {
            Album = (function () {
                function Album(http) {
                    var data = arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, Album);

                    this._debug = data;
                    this.http = http;

                    this.id = data.id;
                    this.type = data.album_type || 'album';
                    this.artists = data.artists ? data.artists.map(function (a) {
                        return new Artist(http, a);
                    }) : [];

                    this.genres = data.genres || [];
                    this.href = data.href = '';
                    this.images = data.images || [];
                    this.name = data.name || '';
                    this.popularity = data.popularity || 0;
                    this.uri = data.uri || '';

                    this.releaseDate = data.release_date;

                    this.artUrl = this.images[0] ? this.images[0].url : '';
                    if (data.tracks) this.tracks = new Pager(http, data.tracks, Track);

                    this.isFull = 'popularity' in data;
                }

                _createClass(Album, [{
                    key: 'fill',
                    value: function fill(force) {
                        if (!force && (this.href === undefined || this.href.length === 0 || this.isFull)) return;
                        this.http.get(this.href).then(function (result) {
                            console.log(result);
                        });
                    }
                }]);

                return Album;
            })();

            _export('Album', Album);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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
System.register(["spotify/service"], function (_export) {
  "use strict";

  var spotify, _prototypeProperties, Search;
  return {
    setters: [function (_spotifyService) {
      spotify = _spotifyService.spotify;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Search = (function () {
        function Search(spotify) {
          this.spotify = spotify;
        }

        _prototypeProperties(Search, {
          inject: {
            value: function inject() {
              return [spotify];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(query) {
              spotify.search(query).then(function (results) {
                return console.log(results);
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
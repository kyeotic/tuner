System.register(["app/spotify/service"], function (_export) {
  "use strict";

  var spotify, _prototypeProperties, Search;
  return {
    setters: [function (_appSpotifyService) {
      spotify = _appSpotifyService["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Search = (function () {
        function Search() {}

        _prototypeProperties(Search, null, {
          activate: {
            value: function activate(params, query) {
              this.query = query.q;
              spotify.search(this.query).then(function (results) {
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
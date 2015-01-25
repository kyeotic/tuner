System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, Spotify;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Spotify = (function () {
        function Spotify(http) {
          this.http = http;
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
              var type = arguments[1] === undefined ? ["album", "artist", "playlsit", "track"] : arguments[1];
              return this.http.get(this.baseUrl + "search?" + Object.toQueryString({ q: query, type: type }));
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
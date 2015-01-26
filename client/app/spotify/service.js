System.register(["aurelia-http-client", "app/core/util"], function (_export) {
  "use strict";

  var HttpClient, Util, _prototypeProperties, Spotify;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_appCoreUtil) {
      Util = _appCoreUtil.Util;
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
              var type = arguments[1] === undefined ? ["album", "artist", "playlist", "track"] : arguments[1];


              debugger;
              return this.http.get("search" + Util.toQueryString({ q: query }) + "&type=" + type.join(","));
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
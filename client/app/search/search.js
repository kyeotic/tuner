System.register(["app/spotify/service", "aurelia-router", "aurelia-framework", "app/core/util"], function (_export) {
  "use strict";

  var spotify, Router, Parent, Util, _prototypeProperties, makeTab, Search;
  return {
    setters: [function (_appSpotifyService) {
      spotify = _appSpotifyService["default"];
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      Parent = _aureliaFramework.Parent;
    }, function (_appCoreUtil) {
      Util = _appCoreUtil.Util;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      makeTab = function (header, model) {
        return { header: header, model: model, viewmodel: "./search-result" };
      };

      Search = (function () {
        function Search(router) {
          var _this = this;
          this.tabs = [];
          this.nav = router;
          this.query = "";
          Object.defineProperty(this, "hasResults", {
            get: function () {
              return _this.query !== undefined && _this.query.length > 2;
            }
          });
        }

        _prototypeProperties(Search, {
          inject: {
            value: function inject() {
              return [Parent.of(Router)];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          search: {
            value: function search() {
              this.nav.navigate("search?" + Util.toQueryString({ q: this.query }));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          activate: {
            value: function activate(params, query) {
              var _this2 = this;
              this.query = query.q || "";

              if (this.query.length === 0) {
                return;
              }

              return spotify.search(this.query).then(function (results) {
                _this2.tabs = [makeTab("Albums", results.albums), makeTab("Artists", results.artists), makeTab("Tracks", results.tracks)];
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
System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, AlbumSearchResult;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      AlbumSearchResult = (function () {
        function AlbumSearchResult() {}

        _prototypeProperties(AlbumSearchResult, {
          getViewStrategy: {
            value: function getViewStrategy() {
              return "./album-search-result.html";
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(albumPager) {
              this.name = "fuck";
              this.pager = albumPager;
              this.items = albumPager.items;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return AlbumSearchResult;
      })();
      _export("AlbumSearchResult", AlbumSearchResult);
    }
  };
});
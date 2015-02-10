System.register(["app/spotify/service", "app/core/util"], function (_export) {
  "use strict";

  var spotify, Util, _prototypeProperties, AlbumBrowse;
  return {
    setters: [function (_appSpotifyService) {
      spotify = _appSpotifyService["default"];
    }, function (_appCoreUtil) {
      Util = _appCoreUtil.Util;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      AlbumBrowse = (function () {
        function AlbumBrowse() {}

        _prototypeProperties(AlbumBrowse, null, {
          activate: {
            value: function activate(config) {
              var _this = this;
              debugger;
              return spotify.getAlbum(config.id).then(function (result) {
                return _this.album = result;
              })["catch"](Util.logError);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return AlbumBrowse;
      })();
      _export("AlbumBrowse", AlbumBrowse);
    }
  };
});
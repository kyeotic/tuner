System.register([], function (_export) {
  "use strict";

  var Artist;
  return {
    setters: [],
    execute: function () {
      Artist = function Artist(http) {
        var _this = this;
        var data = arguments[1] === undefined ? {} : arguments[1];
        this._debug = data;
        this.http = http;

        this.id = data.id;
        this.genres = data.genres || [];
        this.href = data.href = "";
        this.images = data.images || [];
        this.name = data.name || "";
        this.popularity = data.popularity || 0;
        this.uri = data.uri || "";
        this.isFull = "images" in data;

        this.fill = function (force) {
          if (!force && (_this.href === undefined || _this.href.length === 0 || _this.isFull)) return;
          http.get(_this.href).then(function (result) {
            console.log(result);
          });
        };
      };

      _export("Artist", Artist);
    }
  };
});
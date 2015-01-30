System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Pager;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Pager = (function () {
        function Pager(http, data, type) {
          var _this = this;
          if (data === undefined) throw new Error("Unable to construct a Pager without data");

          this._debug = data;
          this.http = http;
          this.type = type;

          this.href = data.href;
          this.items = data.items.map(function (i) {
            return new type(http, i);
          });
          this.limit = data.limit;
          this.offset = data.offset;
          this.next = data.next;
          this.previous = data.previous;
          this.total = data.total;

          Object.defineProperty(this, "hasNext", { get: function () {
              return _this.next !== null || _this.next !== undefined;
            } });
          Object.defineProperty(this, "hasPrevious", { get: function () {
              return _this.previous !== null || _this.previous !== undefined;
            } });
        }

        _prototypeProperties(Pager, null, {
          getNext: {
            value: function getNext() {
              this.http.get(this.next).then(function (results) {
                return console.log(results);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getPrevious: {
            value: function getPrevious() {
              this.http.get(this.previous).then(function (results) {
                return console.log(results);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Pager;
      })();
      _export("Pager", Pager);
    }
  };
});
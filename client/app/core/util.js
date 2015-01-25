System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Util;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Util = (function () {
        function Util() {}

        _prototypeProperties(Util, {
          toQueryString: {
            value: function toQueryString(obj) {
              var str = "",
                  seperator = "";
              for (var key in obj) {
                str += seperator;
                str += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
                seperator = "&";
              }
              return str;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Util;
      })();
      _export("Util", Util);
    }
  };
});
System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Util;
  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

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
            value: function toQueryString(params) {
              var pairs = [];
              var keys = [];
              for (var key in params) {
                if (params.hasOwnProperty(key)) {
                  keys.push(key);
                }
              }
              keys.sort();
              for (var i = 0, len = keys.length; i < len; i++) {
                key = keys[i];
                var value = params[key];
                if (value === null) {
                  continue;
                }
                var pair = encodeURIComponent(key);
                if (isArray(value)) {
                  for (var j = 0, l = value.length; j < l; j++) {
                    var arrayPair = key + "[]" + "=" + encodeURIComponent(value[j]);
                    pairs.push(arrayPair);
                  }
                } else {
                  pair += "=" + encodeURIComponent(value);
                  pairs.push(pair);
                }
              }

              if (pairs.length === 0) {
                return "";
              }

              return "?" + pairs.join("&");
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
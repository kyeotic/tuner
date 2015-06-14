System.register([], function (_export) {
  var Util;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function isArray(test) {
    return Object.prototype.toString.call(test) === '[object Array]';
  }

  return {
    setters: [],
    execute: function () {
      'use strict';

      Util = (function () {
        function Util() {
          _classCallCheck(this, Util);
        }

        _createClass(Util, null, [{
          key: 'toQueryString',
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
                  var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
                  pairs.push(arrayPair);
                }
              } else {
                pair += '=' + encodeURIComponent(value);
                pairs.push(pair);
              }
            }

            if (pairs.length === 0) {
              return '';
            }

            return pairs.join('&');
          }
        }, {
          key: 'logError',
          value: function logError(error) {
            console.error(error);
          }
        }]);

        return Util;
      })();

      _export('Util', Util);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BSWEsSUFBSTs7Ozs7O0FBSmpCLFdBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUNyQixXQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztHQUNsRTs7Ozs7OztBQUVZLFVBQUk7aUJBQUosSUFBSTtnQ0FBSixJQUFJOzs7cUJBQUosSUFBSTs7aUJBQ08sdUJBQUMsTUFBTSxFQUFFO0FBQzNCLGdCQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixnQkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsaUJBQUksSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ3JCLGtCQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDOUIsb0JBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7ZUFDaEI7YUFDRjtBQUNELGdCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWixpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMvQyxpQkFBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLGtCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsa0JBQUksS0FBSyxLQUFLLElBQUksRUFBRTtBQUNsQix5QkFBUztlQUNWO0FBQ0Qsa0JBQUksSUFBSSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLGtCQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNsQixxQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1QyxzQkFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsdUJBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3ZCO2VBQ0YsTUFBTTtBQUNMLG9CQUFJLElBQUksR0FBRyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLHFCQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2VBQ2xCO2FBQ0Y7O0FBRUQsZ0JBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFBRSxxQkFBTyxFQUFFLENBQUM7YUFBRTs7QUFFdEMsbUJBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUN4Qjs7O2lCQUNjLGtCQUFDLEtBQUssRUFBRTtBQUFFLG1CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQUU7OztlQWhDdkMsSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoiY29yZS91dGlsLmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC8ifQ==
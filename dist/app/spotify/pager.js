System.register([], function (_export) {
  'use strict';

  var Pager;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Pager = (function () {
        function Pager(http, data, type) {
          var _this = this;

          _classCallCheck(this, Pager);

          if (data === undefined) throw new Error('Unable to construct a Pager without data');

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

          Object.defineProperty(this, 'hasNext', { get: function get() {
              return _this.next !== null || _this.next !== undefined;
            } });
          Object.defineProperty(this, 'hasPrevious', { get: function get() {
              return _this.previous !== null || _this.previous !== undefined;
            } });
        }

        _createClass(Pager, [{
          key: 'getNext',
          value: function getNext() {
            this.http.get(this.next).then(function (results) {
              return console.log(results);
            });
          }
        }, {
          key: 'getPrevious',
          value: function getPrevious() {
            this.http.get(this.previous).then(function (results) {
              return console.log(results);
            });
          }
        }]);

        return Pager;
      })();

      _export('Pager', Pager);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkvcGFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsS0FBSzs7Ozs7Ozs7O0FBQUwsV0FBSztBQUNILGlCQURGLEtBQUssQ0FDRixJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTs7O2dDQURyQixLQUFLOztBQUVaLGNBQUksSUFBSSxLQUFLLFNBQVMsRUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDOztBQUU5RCxjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFakIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO21CQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7V0FBQSxDQUFDLENBQUM7QUFDcEQsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMxQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDdEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzlCLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7QUFFeEIsZ0JBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxlQUFNO0FBQUUscUJBQU8sTUFBSyxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQUssSUFBSSxLQUFLLFNBQVMsQ0FBQzthQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hILGdCQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsZUFBTTtBQUFFLHFCQUFPLE1BQUssUUFBUSxLQUFLLElBQUksSUFBSSxNQUFLLFFBQVEsS0FBSyxTQUFTLENBQUM7YUFBQyxFQUFFLENBQUMsQ0FBQztTQUM3SDs7cUJBbkJRLEtBQUs7O2lCQXFCUCxtQkFBRztBQUNSLGdCQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztxQkFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUFBLENBQUMsQ0FBQztXQUNoRTs7O2lCQUVVLHVCQUFHO0FBQ1osZ0JBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO3FCQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1dBQ3BFOzs7ZUEzQlEsS0FBSzs7O3VCQUFMLEtBQUsiLCJmaWxlIjoic3BvdGlmeS9wYWdlci5qcyIsInNvdXJjZVJvb3QiOiIuLi9jbGllbnQvIn0=
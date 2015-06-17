System.register(['app/spotify/service', 'aurelia-router', 'aurelia-framework', 'app/core/util'], function (_export) {
  'use strict';

  var spotify, Router, Parent, Util, makeTab, Search;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_appSpotifyService) {
      spotify = _appSpotifyService['default'];
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      Parent = _aureliaFramework.Parent;
    }, function (_appCoreUtil) {
      Util = _appCoreUtil.Util;
    }],
    execute: function () {
      makeTab = function makeTab(header, model) {
        return { header: header, model: model, viewmodel: './search-result' };
      };

      Search = (function () {
        function Search(router) {
          var _this = this;

          _classCallCheck(this, Search);

          this.tabs = [];
          this.nav = router;
          this.query = '';
          Object.defineProperty(this, 'hasResults', {
            get: function get() {
              return _this.query !== undefined && _this.query.length > 2;
            }
          });
        }

        _createClass(Search, [{
          key: 'search',
          value: function search() {
            this.nav.navigate('search?' + Util.toQueryString({ q: this.query }));
          }
        }, {
          key: 'activate',
          value: function activate(params, query) {
            var _this2 = this;

            this.query = query.q || '';

            if (this.query.length === 0) {
              return;
            }

            return spotify.search(this.query).then(function (results) {
              _this2.tabs = [makeTab('Albums', results.albums), makeTab('Artists', results.artists), makeTab('Tracks', results.tracks)];
            });
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [Parent.of(Router)];
          }
        }]);

        return Search;
      })();

      _export('Search', Search);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FDQUtJLE9BQU8sRUFFRSxNQUFNOzs7Ozs7Ozs7OzhCQU5YLE1BQU07O2lDQUNOLE1BQU07OzBCQUNOLElBQUk7OztBQUVSLGFBQU8sR0FBRyxTQUFWLE9BQU8sQ0FBSSxNQUFNLEVBQUUsS0FBSyxFQUFLO0FBQUUsZUFBTyxFQUFFLE1BQU0sRUFBTixNQUFNLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQTtPQUFFOztBQUU3RSxZQUFNO0FBSU4saUJBSkEsTUFBTSxDQUlMLE1BQU0sRUFBRTs7O2dDQUpULE1BQU07O0FBS2YsY0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZixjQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztBQUNsQixjQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixnQkFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO0FBQ3hDLGVBQUcsRUFBRSxlQUFNO0FBQUMscUJBQU8sTUFBSyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFBQztXQUN2RSxDQUFDLENBQUE7U0FDSDs7cUJBWFUsTUFBTTs7aUJBYVgsa0JBQUc7QUFDUCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztXQUNwRTs7O2lCQUVPLGtCQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7OztBQUN0QixnQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFM0IsZ0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzNCLHFCQUFPO2FBQ1I7O0FBRUQsbUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQzlCLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNmLHFCQUFLLElBQUksR0FBRyxDQUNSLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUNqQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFDbkMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQ3BDLENBQUM7YUFDSCxDQUFDLENBQUM7V0FDTjs7O2lCQS9CWSxrQkFBRztBQUNkLG1CQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1dBQzVCOzs7ZUFIVSxNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJzZWFyY2gvc2VhcmNoLmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC8ifQ==
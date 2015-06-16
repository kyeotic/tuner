System.register(['aurelia-router', 'aurelia-framework', 'app/core/util'], function (_export) {
  'use strict';

  var Router, RouteRecognizer, Parent, Util, Home;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
      RouteRecognizer = _aureliaRouter.RouteRecognizer;
    }, function (_aureliaFramework) {
      Parent = _aureliaFramework.Parent;
    }, function (_appCoreUtil) {
      Util = _appCoreUtil.Util;
    }],
    execute: function () {
      Home = (function () {
        function Home(router) {
          _classCallCheck(this, Home);

          this.nav = router;
          this.query = '';
        }

        _createClass(Home, [{
          key: 'submit',
          value: function submit() {
            this.nav.navigate('search?' + Util.toQueryString({ q: this.query }));
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [Parent.of(Router)];
          }
        }]);

        return Home;
      })();

      _export('Home', Home);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUlhLElBQUk7Ozs7Ozs7OzhCQUpULE1BQU07dUNBQUUsZUFBZTs7aUNBQ3ZCLE1BQU07OzBCQUNOLElBQUk7OztBQUVDLFVBQUk7QUFJSixpQkFKQSxJQUFJLENBSUgsTUFBTSxFQUFDO2dDQUpSLElBQUk7O0FBS2IsY0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFDbEIsY0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7O3FCQVBVLElBQUk7O2lCQVFULGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7V0FDcEU7OztpQkFUWSxrQkFBRztBQUNkLG1CQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1dBQzVCOzs7ZUFIVSxJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJob21lL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC8ifQ==
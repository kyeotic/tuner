System.register(['aurelia-framework', 'aurelia-router', 'bootstrap/css/bootstrap.css!'], function (_export) {
	'use strict';

	var inject, Router, App;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}, function (_bootstrapCssBootstrapCss) {}],
		execute: function () {
			App = (function () {
				function App(router, events) {
					_classCallCheck(this, _App);

					this.router = router;
					this.router.configure(function (config) {
						config.title = 'Tuner';

						config.map([{ route: ['', 'home'], moduleId: 'app/home/index', title: 'Home', nav: false }, { route: 'search', moduleId: 'app/search/search', title: 'Search', nav: true }, { route: 'albums/:id', moduleId: 'app/browse/album', nav: false }, { route: 'artists/:id', moduleId: 'app/browse/artist', nav: false }, { route: 'tracks/:id', moduleId: 'app/browse/track', nav: false }]);
						config.mapUnknownRoutes('errors/404');
					});
				}

				var _App = App;
				App = inject(Router)(App) || App;
				return App;
			})();

			_export('App', App);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUJBS2EsR0FBRzs7Ozs7OzhCQUxSLE1BQU07OzJCQUNOLE1BQU07OztBQUlELE1BQUc7QUFDSixhQURDLEdBQUcsQ0FDSCxNQUFNLEVBQUUsTUFBTSxFQUFFOzs7QUFFM0IsU0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsU0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDL0IsWUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7O0FBRXZCLFlBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDUixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBUyxRQUFRLEVBQUUsZ0JBQWdCLEVBQVMsS0FBSyxFQUFFLE1BQU0sRUFBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQy9GLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYSxRQUFRLEVBQUUsbUJBQW1CLEVBQU0sS0FBSyxFQUFFLFFBQVEsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBRzlGLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBSSxRQUFRLEVBQUUsa0JBQWtCLEVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUN6RSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUksUUFBUSxFQUFFLG1CQUFtQixFQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFDM0UsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFJLFFBQVEsRUFBRSxrQkFBa0IsRUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBRTNFLENBQUMsQ0FBQztBQUNILFlBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztNQUN0QyxDQUFDLENBQUM7S0FDSDs7ZUFuQlcsR0FBRztBQUFILE9BQUcsR0FEZixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsR0FBRyxLQUFILEdBQUc7V0FBSCxHQUFHOzs7a0JBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50LyJ9
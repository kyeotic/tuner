System.register(['aurelia-framework', 'aurelia-router', 'bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
	var inject, Router, App;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}, function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
		execute: function () {
			'use strict';

			App = (function () {
				function App(router, events) {
					_classCallCheck(this, _App);

					this.router = router;
					this.router.configure(function (config) {
						config.title = 'Tuner';

						debugger;
						config.map([{ route: ['', 'home'], moduleId: 'home/index', title: 'Home', nav: false }, { route: 'search', moduleId: 'search/search', title: 'Search', nav: true }, { route: 'albums/:id', moduleId: 'browse/album', nav: false }, { route: 'artists/:id', moduleId: 'browse/artist', nav: false }, { route: 'tracks/:id', moduleId: 'browse/track', nav: false }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FCQU1hLEdBQUc7Ozs7Ozs4QkFOUixNQUFNOzsyQkFDTixNQUFNOzs7OztBQUtELE1BQUc7QUFDSixhQURDLEdBQUcsQ0FDSCxNQUFNLEVBQUUsTUFBTSxFQUFFOzs7QUFFM0IsU0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsU0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDL0IsWUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7O0FBRXZCLGVBQVM7QUFDVCxZQUFNLENBQUMsR0FBRyxDQUFDLENBQ1IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQVMsUUFBUSxFQUFFLFlBQVksRUFBUyxLQUFLLEVBQUUsTUFBTSxFQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFDM0YsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFhLFFBQVEsRUFBRSxlQUFlLEVBQU0sS0FBSyxFQUFFLFFBQVEsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBRzFGLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBSSxRQUFRLEVBQUUsY0FBYyxFQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFDckUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFJLFFBQVEsRUFBRSxlQUFlLEVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUN2RSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUksUUFBUSxFQUFFLGNBQWMsRUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBRXZFLENBQUMsQ0FBQztBQUNILFlBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztNQUN0QyxDQUFDLENBQUM7S0FDSDs7ZUFwQlcsR0FBRztBQUFILE9BQUcsR0FEZixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsR0FBRyxLQUFILEdBQUc7V0FBSCxHQUFHOzs7a0JBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50LyJ9
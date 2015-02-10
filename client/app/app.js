System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      App = (function () {
        function App(router) {
          this.router = router;
          this.router.configure(function (config) {
            config.title = "Tuner";
            config.map([{ route: ["", "home"], moduleId: "home/index", title: "Home", nav: false }, { route: "search", moduleId: "search/search", title: "Search", nav: true }, { route: "albums/:id", moduleId: "browse/album", nav: false }, { route: "artists/:id", moduleId: "browse/artist", nav: false }, { route: "tracks/:id", moduleId: "browse/track", nav: false }]);
            config.mapUnknownRoutes("errors/404");
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return App;
      })();
      _export("App", App);
    }
  };
});
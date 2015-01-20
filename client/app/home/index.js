System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, Home;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Home = (function () {
        function Home(router) {
          this.router = router;
          this.query = "";
        }

        _prototypeProperties(Home, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          submit: {
            value: function submit() {
              this.router.navigate("search", Object.toQueryString({ q: this.query }));
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Home;
      })();
      _export("Home", Home);
    }
  };
});
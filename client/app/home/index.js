System.register(["aurelia-router", "aurelia-framework"], function (_export) {
  "use strict";

  var Router, Parent, _prototypeProperties, Home;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      Parent = _aureliaFramework.Parent;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Home = (function () {
        function Home(router) {
          this.nav = router;
          this.query = "";
        }

        _prototypeProperties(Home, {
          inject: {
            value: function inject() {
              return [Parent.of(Router)];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          submit: {
            value: function submit() {
              this.nav.navigate("search?" + Object.toQueryString({ q: this.query }));
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
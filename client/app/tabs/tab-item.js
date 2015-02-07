System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, TabItem;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      TabItem = (function () {
        function TabItem() {
          this.isSelected = false;
        }

        _prototypeProperties(TabItem, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("tab-item").withProperty("title");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return TabItem;
      })();
      _export("TabItem", TabItem);
    }
  };
});
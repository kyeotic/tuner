System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, TabControl;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      TabControl = (function () {
        function TabControl() {
          this.items = [];
          this.selectedItem = null;
        }

        _prototypeProperties(TabControl, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("tab-control").syncChildren("items", "itemsChanged", "tab-item");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          itemsChanged: {
            value: function itemsChanged(mutations) {
              if (this.items.length > 0) {
                if (!this.selectedItem || this.items.indexOf(this.selectedItem) === -1) {
                  this.selectItem(this.items[0]);
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          selectItem: {
            value: function selectItem(item) {
              if (this.selectedItem) {
                this.selectedItem.isSelected = false;
              }

              this.selectedItem = item;

              if (this.selectedItem) {
                this.selectedItem.isSelected = true;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return TabControl;
      })();
      _export("TabControl", TabControl);
    }
  };
});
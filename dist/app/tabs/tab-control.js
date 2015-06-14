System.register(['aurelia-framework'], function (_export) {
  var Behavior, TabControl;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      'use strict';

      TabControl = (function () {
        function TabControl() {
          _classCallCheck(this, TabControl);

          this.items = [];
          this.selectedItem = null;
        }

        _createClass(TabControl, [{
          key: 'itemsChanged',
          value: function itemsChanged(mutations) {
            if (this.items.length > 0) {
              if (!this.selectedItem || this.items.indexOf(this.selectedItem) === -1) {
                this.selectItem(this.items[0]);
              }
            }
          }
        }, {
          key: 'selectItem',
          value: function selectItem(item) {
            if (this.selectedItem) {
              this.selectedItem.isSelected = false;
            }

            this.selectedItem = item;

            if (this.selectedItem) {
              this.selectedItem.isSelected = true;
            }
          }
        }], [{
          key: 'metadata',
          value: function metadata() {
            return Behavior.customElement('tab-control').syncChildren('items', 'itemsChanged', 'tab-item');
          }
        }]);

        return TabControl;
      })();

      _export('TabControl', TabControl);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMvdGFiLWNvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtnQkFFYSxVQUFVOzs7Ozs7OzttQ0FGZixRQUFROzs7OztBQUVILGdCQUFVO0FBT1YsaUJBUEEsVUFBVSxHQU9SO2dDQVBGLFVBQVU7O0FBUW5CLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCOztxQkFWVSxVQUFVOztpQkFZVCxzQkFBQyxTQUFTLEVBQUM7QUFDckIsZ0JBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0FBQ3ZCLGtCQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7QUFDcEUsb0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQ2hDO2FBQ0Y7V0FDRjs7O2lCQUVTLG9CQUFDLElBQUksRUFBQztBQUNkLGdCQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7QUFDbkIsa0JBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN0Qzs7QUFFRCxnQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7O0FBRXpCLGdCQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7QUFDbkIsa0JBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNyQztXQUNGOzs7aUJBN0JjLG9CQUFFO0FBQ2YsbUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDNUIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7V0FDdEQ7OztlQUxVLFVBQVU7Ozs0QkFBVixVQUFVIiwiZmlsZSI6InRhYnMvdGFiLWNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50LyJ9
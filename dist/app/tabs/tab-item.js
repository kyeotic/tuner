System.register(['aurelia-framework'], function (_export) {
  var Behavior, TabItem;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      'use strict';

      TabItem = (function () {
        function TabItem() {
          _classCallCheck(this, TabItem);

          this.isSelected = false;
        }

        _createClass(TabItem, null, [{
          key: 'metadata',
          value: function metadata() {
            return Behavior.customElement('tab-item').withProperty('title');
          }
        }]);

        return TabItem;
      })();

      _export('TabItem', TabItem);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMvdGFiLWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtnQkFFYSxPQUFPOzs7Ozs7OzttQ0FGWixRQUFROzs7OztBQUVILGFBQU87QUFPUCxpQkFQQSxPQUFPLEdBT0w7Z0NBUEYsT0FBTzs7QUFRaEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7O3FCQVRVLE9BQU87O2lCQUNILG9CQUFFO0FBQ2YsbUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FDekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQzFCOzs7ZUFMVSxPQUFPOzs7eUJBQVAsT0FBTyIsImZpbGUiOiJ0YWJzL3RhYi1pdGVtLmpzIiwic291cmNlUm9vdCI6Ii4uL2NsaWVudC8ifQ==
System.register(['spotify/service', 'core/util'], function (_export) {
	var spotify, Util, AlbumBrowse;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	return {
		setters: [function (_spotifyService) {
			spotify = _spotifyService['default'];
		}, function (_coreUtil) {
			Util = _coreUtil.Util;
		}],
		execute: function () {
			'use strict';

			AlbumBrowse = (function () {
				function AlbumBrowse() {
					_classCallCheck(this, AlbumBrowse);
				}

				_createClass(AlbumBrowse, [{
					key: 'activate',
					value: function activate(config) {
						var _this = this;

						return spotify.getAlbum(config.id).then(function (result) {
							return _this.album = result;
						})['catch'](Util.logError);
					}
				}]);

				return AlbumBrowse;
			})();

			_export('AlbumBrowse', AlbumBrowse);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZS9hbGJ1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO29CQUdhLFdBQVc7Ozs7Ozs7Ozs7b0JBRmhCLElBQUk7Ozs7O0FBRUMsY0FBVzthQUFYLFdBQVc7MkJBQVgsV0FBVzs7O2lCQUFYLFdBQVc7O1lBQ2Ysa0JBQUMsTUFBTSxFQUFFOzs7QUFDaEIsYUFBTyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDaEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtjQUFJLE1BQUssS0FBSyxHQUFHLE1BQU07T0FBQSxDQUFDLFNBQzlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO01BQ3ZCOzs7V0FMVyxXQUFXOzs7MEJBQVgsV0FBVyIsImZpbGUiOiJicm93c2UvYWxidW0uanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50LyJ9
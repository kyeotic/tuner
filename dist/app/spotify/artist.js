System.register([], function (_export) {
  'use strict';

  var Artist;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Artist = function Artist(http) {
        var _this = this;

        var data = arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, Artist);

        this._debug = data;
        this.http = http;

        this.id = data.id;
        this.genres = data.genres || [];
        this.href = data.href = '';
        this.images = data.images || [];
        this.name = data.name || '';
        this.popularity = data.popularity || 0;
        this.uri = data.uri || '';
        this.isFull = 'images' in data;

        this.artUrl = this.images[0] ? this.images[0].url : '';
        this.fill = function (force) {
          if (!force && (_this.href === undefined || _this.href.length === 0 || _this.isFull)) return;
          http.get(_this.href).then(function (result) {
            console.log(result);
          });
        };
      };

      _export('Artist', Artist);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3RpZnkvYXJ0aXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFhLE1BQU07Ozs7Ozs7QUFBTixZQUFNLEdBQ04sU0FEQSxNQUFNLENBQ0wsSUFBSSxFQUFhOzs7WUFBWCxJQUFJLGdDQUFHLEVBQUU7OzhCQURoQixNQUFNOztBQUVmLFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVqQixZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDbEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNoQyxZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDaEMsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUM1QixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLFlBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDMUIsWUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDOztBQUUvQixZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBR3ZELFlBQUksQ0FBQyxJQUFJLEdBQUcsVUFBQyxLQUFLLEVBQUs7QUFDckIsY0FBSSxDQUFDLEtBQUssS0FBSyxNQUFLLElBQUksS0FBSyxTQUFTLElBQUksTUFBSyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFLLE1BQU0sQ0FBQSxBQUFDLEVBQUUsT0FBTztBQUN6RixjQUFJLENBQUMsR0FBRyxDQUFDLE1BQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ2pDLG1CQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ3JCLENBQUMsQ0FBQTtTQUNILENBQUE7T0FDRjs7d0JBdkJVLE1BQU0iLCJmaWxlIjoic3BvdGlmeS9hcnRpc3QuanMiLCJzb3VyY2VSb290IjoiLi4vY2xpZW50LyJ9
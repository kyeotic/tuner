System.register([], function (_export) {
  "use strict";

  var TrackSearchResult;
  return {
    setters: [],
    execute: function () {
      TrackSearchResult = function TrackSearchResult(trackPager) {
        this.pager = trackPager;
        this.items = trackPager.items;
      };

      _export("TrackSearchResult", TrackSearchResult);
    }
  };
});
System.register([], function (_export) {
  "use strict";

  var ArtistSearchResult;
  return {
    setters: [],
    execute: function () {
      ArtistSearchResult = function ArtistSearchResult(artistPager) {
        this.pager = artistPager;
        this.items = artistPager.items;
      };

      _export("ArtistSearchResult", ArtistSearchResult);
    }
  };
});
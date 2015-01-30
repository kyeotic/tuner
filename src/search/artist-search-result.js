export class ArtistSearchResult {
    constructor(artistPager) {
      this.pager = artistPager;
      this.items = artistPager.items;
    }
}
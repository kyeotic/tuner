export class TrackSearchResult {
    constructor(trackPager) {
      this.pager = trackPager;
      this.items = trackPager.items;
    }
}
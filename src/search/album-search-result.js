export class AlbumSearchResult {
    static getViewStrategy (){
      return './album-search-result.html';
    }
    activate(albumPager) {
      this.name = "fuck"
      this.pager = albumPager;
      this.items = albumPager.items;
      //this.view = 'app/search/album-search-result.html';
    }
}
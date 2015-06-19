import {Album} from 'app/spotify/album';
import {Artist} from 'app/spotify/artist';
import {Track} from 'app/spotify/track';

export class SearchResult {
    getViewStrategy (){
      switch (this.pager.type) {
        case Album: return 'app/search/results/albums.html';
        case Artist: return 'app/search/results/artists.html';
        case Track: return 'app/search/results/tracks.html';
      }
    }
    activate(pager) {
      this.pager = pager;
      this.items = pager.items;
    }
}
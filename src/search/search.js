import spotify from 'app/spotify/service';
import {AlbumSearchResult} from 'app/search/album-search-result';
import {ArtistSearchResult} from 'app/search/artist-search-result';
import {TrackSearchResult} from 'app/search/track-search-result';

export class Search {
  constructor() {
    this.tabs = [];
    this.query = '';
    Object.defineProperty(this, 'hasQuery', {
      get: () => {return this.query !== undefined && this.query.length > 2;}
    })
  }

  activate(params, query) {
    this.query = query.q || '';
    return spotify.search(this.query)
      .then(results => {
        this.tabs = [
            //{ header: 'Albums', model: new AlbumSearchResult(results.albums) }
           { header: 'Artists', model: new ArtistSearchResult(results.artists) }
          , { header: 'Tracks', model: new TrackSearchResult(results.tracks) }
        ];
        this.album = results.albums;
      });
  }
}

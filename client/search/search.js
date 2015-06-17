import spotify from 'app/spotify/service';
import {Router} from 'aurelia-router';
import {Parent} from 'aurelia-framework';
import {Util} from 'app/core/util';

let makeTab = (header, model) => { return { header, model, viewmodel: './search-result'} }

export class Search {
  static inject() { 
    return [Parent.of(Router)]; 
  }
  constructor(router) {
    this.tabs = [];
    this.nav = router;
    this.query = '';
    Object.defineProperty(this, 'hasResults', {
      get: () => {return this.query !== undefined && this.query.length > 2;}
    })
  }

  search() {
    this.nav.navigate('search?' + Util.toQueryString({q: this.query}));
  }

  activate(params, query) {
    this.query = query.q || '';

    if (this.query.length === 0) {
      return;
    }

    return spotify.search(this.query)
      .then(results => {
        this.tabs = [
            makeTab('Albums', results.albums)
          , makeTab('Artists', results.artists)
          , makeTab('Tracks', results.tracks) 
        ];
      });
  }
}

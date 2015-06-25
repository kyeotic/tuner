import spotify from 'app/spotify/service';
import {Router} from 'aurelia-router';
import {Parent} from 'aurelia-framework';
import {Util} from 'app/core/util';

export class Search {
  static inject() { 
    return [Parent.of(Router)]; 
  }
  constructor(router) {
    this.tabs = [];
    this.nav = router;
    this.query = '';
  }

  get hasResults() {
    return this.query !== undefined && this.query.length > 2;
  }

  search() {
    this.nav.navigate('search?' + Util.toQueryString({q: this.query}));
  }

  activate(params) {
    this.query = params.q || '';

    if (this.query.length === 0) {
      return;
    }

    return spotify.search(this.query)
      .then(results => {
        this.tabs = [
            { header: 'Albums', model: results.albums } 
          , { header: 'Artists', model: results.artists }
          , { header: 'Tracks', model: results.tracks }
        ];
      }.bind(this));
  }
}

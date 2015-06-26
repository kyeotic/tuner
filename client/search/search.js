import spotify from 'app/spotify/service';
import {activationStrategy} from 'aurelia-router';

export class Search {
  constructor(router) {
    this.tabs = [];
    this.query = '';
  }

  determineActivationStrategy() {
    //debugger;
    return activationStrategy.replace;
  }

  get hasResults() {
    return this.query !== undefined && this.query.length > 2;
  }

  activate(params) {
    this.query = params.q || '';

    if (this.query.length === 0) {
      return;
    }

    return spotify.search(this.query)
      .then(results => {
        this.tabs = [
            { header: 'Albums', model: results.albums, } 
          , { header: 'Artists', model: results.artists }
          , { header: 'Tracks', model: results.tracks }
        ];
      }.bind(this));
  }
}

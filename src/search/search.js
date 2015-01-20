import {spotify} from 'spotify/service';

export class Search {
  static inject() { return [spotify]; }
  constructor(spotify) {
    this.spotify = spotify;
  }

  activate(query) {
    spotify.search(query).then(results => console.log(results));
  }
}

import {spotify} from 'app/spotify/service';

export class Search {
  static inject() { return [spotify]; }
  constructor(spotify) {
    this.spotify = spotify;
  }

  activate(query) {
    console.log(query);
    //spotify.search(query).then(results => console.log(results));
  }
}

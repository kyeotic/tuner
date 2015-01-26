import spotify from 'app/spotify/service';

export class Search {

  activate(params, query) {
    this.query = query.q;
    spotify.search(this.query).then(results => console.log(results));
  }
}

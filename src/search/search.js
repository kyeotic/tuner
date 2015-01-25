import spotify from 'app/spotify/service';

export class Search {

  activate(params, query) {
    debugger;
    console.log('search activate', params, query);
    //spotify.search(query).then(results => console.log(results));
  }
}

import {HttpClient} from 'aurelia-http-client';

export class Spotify {

  static inject() { return [HttpClient]; }
  constructor(http) {
    this.http = http;
    this.baseUrl = 'https://api.spotify.com/';
  }

  search(query, type = ['album', 'artist', 'playlsit', 'track']) {
    return this.http.get(this.baseUrl + "search?" + Object.toQueryString({q: query, type: type}));
  }

}

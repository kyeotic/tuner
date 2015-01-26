import {HttpClient} from 'aurelia-http-client';
import {Util} from 'app/core/util';

class Spotify {

  static inject() { return [HttpClient]; }
  constructor(http) {
    this.http = new HttpClient('https://api.spotify.com/v1');
    this.baseUrl = 'https://api.spotify.com/';
  }

  search(query, type = ['album', 'artist', 'playlist', 'track']) {
    //Spotify wants a comma separated type array, but utils will use the PHP array syntax

    debugger;
    return this.http.get("search" + Util.toQueryString({q: query}) + "&type=" + type.join(','));
  }

}

export default new Spotify()

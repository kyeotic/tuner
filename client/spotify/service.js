import {HttpClient} from 'aurelia-http-client';
import {Util} from 'core/util';
import {Artist} from 'spotify/artist';
import {Track} from 'spotify/track';
import {Album} from 'spotify/album';
import {Pager} from 'spotify/pager';

class Spotify {

  static inject() { return [HttpClient]; }
  constructor(http) {
    this.http = new HttpClient('https://api.spotify.com/v1');
    this.baseUrl = 'https://api.spotify.com/';
  }

  //'playlist' exluded from type search for now
  search(query, type = ['album', 'artist', 'track']) {
    //Spotify wants a comma separated type array, but utils will use the PHP array syntax
    return this.http.get("search?" + Util.toQueryString({q: query}) + "&type=" + type.join(','))
      .then(results => {
        return {
            artists: new Pager(this.http, results.content.artists, Artist)
          , albums:  new Pager(this.http, results.content.albums, Album)
          , tracks:  new Pager(this.http, results.content.tracks, Track)
        };
      })
      .catch(Util.logError);
  }

  getAlbum(id) {
  	return this.http.get(`albums/${id}`)
  		.then(result => new Album(this.http, result.content))
  		.catch(Util.logError);
  }
}

export default new Spotify()

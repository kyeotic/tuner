import {Artist} from 'spotify/artist';
import {Track} from 'spotify/track';
import {Pager} from 'spotify/pager';

export class Album {
  constructor(http, data = {}) {
    this._debug = data;
    this.http = http;

    this.id = data.id;
    this.type = data.album_type || 'album';
    this.artists = data.artists ? data.artists.map(a => new Artist(http, a)) : [];

    this.genres = data.genres || [];
    this.href = data.href = '';
    this.images = data.images || [];
    this.name = data.name || '';
    this.popularity = data.popularity || 0;
    this.uri = data.uri || '';

    this.releaseDate = data.release_date;

    this.artUrl = this.images[0] ? this.images[0].url : ''; //Not found image HERE

    //Does not appear on simplified objects
    if (data.tracks)
      this.tracks = new Pager(http, data.tracks, Track);


    this.isFull = 'popularity' in data;
  }

  //Update a simplified object with all details
  fill(force) {
  	if (!force && (this.href === undefined || this.href.length === 0 || this.isFull)) return;
      this.http.get(this.href).then(result => {
        console.log(result);
      })
  }
}
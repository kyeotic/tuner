import {Artist} from 'app/spotify/artist';
import {Album} from 'app/spotify/album';

export class Track {
  constructor(http, data = {}) {
    this._debug = data;
    this.http = http;


    this.id = data.id;
    this.genres = data.genres || [];
    this.href = data.href = '';
    this.name = data.name || '';
    this.popularity = data.popularity || 0;
    this.uri = data.uri || '';
    this.discNumber = data.disc_number;
    this.trackNumber = data.track_number;
    this.explicit = data.explicit;
    this.duration = data.duration_ms;
    this.previewUrl = data.preview_url;

    this.album = new Album(http, data.album);
    this.artists = data.artists ? data.artists.map(a => new Artist(http, a)) : [];

    this.isFull = 'popularity' in data;

    //Update a simplified object with all details
    this.fill = (force) => {
      if (!force && (this.href === undefined || this.href.length === 0 || this.isFull)) return;
      http.get(this.href).then(result => {
        console.log(result);
      })
    }
  }
}
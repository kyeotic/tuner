export class Artist {
  constructor(http, data = {}) {
    this._debug = data;
    this.http = http;

    this.id = data.id;
    this.genres = data.genres || [];
    this.href = data.href = '';
    this.images = data.images || [];
    this.name = data.name || '';
    this.popularity = data.popularity || 0;
    this.uri = data.uri || '';
    this.isFull = 'images' in data;

    //Update a simplified object with all details
    this.fill = (force) => {
      if (!force && (this.href === undefined || this.href.length === 0 || this.isFull)) return;
      http.get(this.href).then(result => {
        console.log(result);
      })
    }
  }
}
export class Pager {
    constructor(http, data, type) {
      if (data === undefined)
        throw new Error("Unable to construct a Pager without data");

      this._debug = data;
      this.http = http;
      this.type = type;

      this.href = data.href;
      this.items = data.items.map(i => new type(i));
      this.limit = data.limit;
      this.offset = data.offset;
      this.next = data.next;
      this.previous = data.previous;
      this.total = data.total;

      Object.defineProperty(this, 'hasNext', { get: () => { return this.next;} });
      Object.defineProperty(this, 'hasPrevious', { get: () => { return this.previous;} });
    }

    getNext() {
      this.http.get(this.next).then(results => console.log(results));
    }

    getPrevious() {
      this.http.get(this.previous).then(results => console.log(results));
    }
}
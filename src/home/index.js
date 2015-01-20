import {Router} from 'aurelia-router';

export class Home {
  static inject() { return [Router]; }
  constructor(router){
    this.router = router;
    this.query = '';
  }
  submit() {
    this.router.navigate('search', Object.toQueryString({q: this.query}));
  }
}

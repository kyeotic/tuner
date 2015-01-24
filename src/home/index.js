import {Router} from 'aurelia-router';
import {Parent} from 'aurelia-framework';

export class Home {
  static inject() { 
    return [Parent.of(Router)]; 
  }
  constructor(router){
    this.nav = router;
    this.query = '';
  }
  submit() {
    this.nav.navigate('search?' + Object.toQueryString({q: this.query}));
  }
}

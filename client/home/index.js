import {Router, RouteRecognizer} from 'aurelia-router';
import {Parent} from 'aurelia-framework';
import {Util} from 'core/util';

export class Home {
  static inject() { 
    return [Parent.of(Router)]; 
  }
  constructor(router){
    this.nav = router;
    this.query = '';
  }
  submit() {
    this.nav.navigate('search?' + Util.toQueryString({q: this.query}));
  }
}

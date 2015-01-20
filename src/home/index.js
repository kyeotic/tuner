import {Router} from 'aurelia-router';
import {Parent} from 'aurelia-framework';

export class Home {
  static inject() { 
    debugger;
    return [Parent.of(Router)]; 
  }
  constructor(router){
    this.router = router;
  }
}

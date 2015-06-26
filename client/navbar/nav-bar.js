import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;

  constructor() {
  	this.query = 'frig';
  }

  attached() {
  	this.unsubscribe = this.router.events.subscribe('router:navigation:complete', () => {
  		this.query = '';
  	});
  }

  detached(view) {
  	this.unsubscribe();
  }

  get isHome() {
  	return this.router && this.router.currentInstruction && this.router.currentInstruction.fragment === '';
  }
}

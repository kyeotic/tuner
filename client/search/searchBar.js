import {customElement, inject, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Util} from 'app/core/util';

@customElement('search-bar')
@inject(Router)
export class SearchBar {
	@bindable query;
	constructor(router) {
		this.nav = router;
	}
	submit() {
	    this.nav.navigate('search?' + Util.toQueryString({q: this.query}));
	  }
}
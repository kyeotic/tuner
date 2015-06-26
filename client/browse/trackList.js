import {customElement, bindable} from 'aurelia-framework';

@customElement('track-list')
export class TrackList {
	@bindable pager;

	get tracks () {
		return this.pager.items;
	}
}
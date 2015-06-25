import {customElement, bindable} from 'aurelia-framework';

@customElement('track-list')
export class TrackList {
	@bindable tracks;

	get items () {
		return this.tracks.items;
	}
}
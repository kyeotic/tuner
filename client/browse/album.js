import spotify from 'spotify/service';
import {Util} from 'core/util';

export class AlbumBrowse {
	activate(config) {
		return spotify.getAlbum(config.id)
			.then(result => this.album = result)
			.catch(Util.logError);
	}
}
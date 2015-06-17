import spotify from 'app/spotify/service';
import {Util} from 'app/core/util';

export class AlbumBrowse {
	activate(config) {
		return spotify.getAlbum(config.id)
			.then(result => this.album = result)
			.catch(Util.logError);
	}
}
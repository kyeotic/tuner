import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap/css/bootstrap.css!';
import 'font-awesome/css/font-awesome.min.css!';

@inject(Router)
export class App {
	constructor(router, events) {

		this.router = router;
		this.router.configure(config => {
			config.title = 'Tuner';
			//config.options.pushState = true;
			config.map([
				  { route: ['', 'home'],	name: 'home',	moduleId: 'app/home/index',       	title: 'Home',   	nav: false }
				, { route: 'search',        name: 'search',	moduleId: 'app/search/search',    	title: 'Search', 	nav: true }

				//Browse
				, { route: 'albums/:id', 	name: 'albums',	moduleId: 'app/browse/album',							nav: false }
				, { route: 'artists/:id', 	name: 'artists',moduleId: 'app/browse/artist',							nav: false }
				, { route: 'tracks/:id', 	name: 'tracks',	moduleId: 'app/browse/track',							nav: false }

			]);
			config.mapUnknownRoutes('errors/404');
		});
	}
}

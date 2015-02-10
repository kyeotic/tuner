import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Tuner';
      //config.options.pushState = true;
      config.map([
          { route: ['', 'home'],        moduleId: 'home/index',       	title: 'Home',   	nav: false }
        , { route: 'search',            moduleId: 'search/search',    	title: 'Search', 	nav: true }

        //Browse
        , { route: 'albums/:id', 		moduleId: 'browse/album',							nav: false }
        , { route: 'artists/:id', 		moduleId: 'browse/artist',							nav: false }
        , { route: 'tracks/:id', 		moduleId: 'browse/track',							nav: false }

      ]);
      config.mapUnknownRoutes('errors/404');
    });
  }
}

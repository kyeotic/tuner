import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Tuner';
      config.map([
          { route: ['', 'home'],        moduleId: 'home/index',       title: 'Home',   nav: false }
        , { route: 'search',            moduleId: 'search/search',    title: 'Search', nav: true }
      ]);
      config.mapUnknownRoutes('errors/404');
    });
  }
}

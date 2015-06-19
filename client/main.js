export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('app/plugins/resources');

  aurelia.start().then(a => a.setRoot('app/app', document.body));
}
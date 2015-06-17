import 'babel/polyfill';

import React from 'react';
import Router from 'react-router';

var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index}/>
    <Route name="new" path="contact/new" handler={NewContact}/>
    <Route name="contact" path="contact/:id" handler={Contact}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
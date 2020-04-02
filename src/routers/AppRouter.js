import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Dashboard from '../components/Dashboard/Dashboard';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
       { /*<Route path="/movie/:id" component={CardDetails} />*/
      }
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

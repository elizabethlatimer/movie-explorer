import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import SiteNav from './SiteNav';
import Home from './Home';
import MovieDetail from './MovieDetail';
import MoviesList from './MoviesList';

function Routes() {

  return (
    <BrowserRouter>
      <SiteNav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/movies'>
          <MoviesList />
        </Route>
        <Route exact path='/movies/:id'>
          <MovieDetail />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
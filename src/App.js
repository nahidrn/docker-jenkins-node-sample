/**
 * @author NahidRahman
 * @description
 * the first entry point of the application
 * main responsibility is to initiate route
 *
 */

import React from 'react';
import Navigation from './components/common/navigation';
import PageRenderer from './page-renderer';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  // Show for guest user and pass along in navigation
  const user = {
    firstName: 'Guest',
    lastName: ''
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Navbar} from './core/components';
import {Dashboard} from './features';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar/>

        <Switch>
          <Route path="/s/:sport">
            <Dashboard/>
          </Route>

          <Route path="/">
            <h1>Select a Sport</h1>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

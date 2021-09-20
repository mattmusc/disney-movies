import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Navbar} from 'core/components';
import {Dashboard} from 'features';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar/>

        <Switch>
          <Route path="/m/:id">
            <h1>Movie detail</h1>
          </Route>

          <Route path="/">
            <Dashboard/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

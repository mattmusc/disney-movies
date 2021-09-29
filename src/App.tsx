import {Dashboard, MovieDetail} from 'features';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Router>

        <Switch>
          <Route path="/m/:id">
            <MovieDetail/>
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

import React from 'react';

import Landing from './components/landing/Landing';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;

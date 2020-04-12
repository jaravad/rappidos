import React from 'react';

import Landing from './components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;

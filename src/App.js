import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/landing/Landing';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;

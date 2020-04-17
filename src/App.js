import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/landing/Landing';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VerificationCode from './components/VerificationCode';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/#how-it-works" />
        <Route path="/login" component={LogIn} />
        <Route path="/verification" component={VerificationCode}></Route>
      </Switch>
    </Router>
  );
}

export default App;

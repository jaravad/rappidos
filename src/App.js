import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/landing/Landing';
import LogIn from './components/login/LogIn';
import SignupLogin from './components/signup-login/SignupLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlatesPage from './components/plates/PlatesPage';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/#how-it-works" />
        <Route path="/login" component={LogIn} />
        <Route path="/signup-login" component={SignupLogin} />
        <Route path="/platos" component={PlatesPage} />
      </Switch>
    </Router>
  );
}

export default App;

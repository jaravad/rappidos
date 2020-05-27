import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/landing/Landing";
import SignupLogin from "./components/signup-login/SignupLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlatesPage from "./components/plates/PlatesPage";
import "./assets/css/404error.css";
const Page404 = ({ location }) => (
  <div className="not-found">
    <h1>404 ERROR</h1>
    <h2>
      <b>
        Oops! This Page <code>{location.pathname}</code> Could Not Be Found
      </b>
    </h2>
    <p>
      Sorry but the page you are looking for does not exist, have been removed,
      name changed or is temporarily unavailable.
    </p>
  </div>
);
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar></NavBar>
          <Landing></Landing>
        </Route>
        <Route exact path="/#how-it-works">
          <NavBar></NavBar>
        </Route>
        <Route exact path="/signup-login">
          <NavBar></NavBar>
          <SignupLogin></SignupLogin>
        </Route>
        <Route exact path="/platos">
          <NavBar></NavBar>
          <PlatesPage></PlatesPage>
        </Route>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

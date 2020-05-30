import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/landing/Landing";
import SignupLogin from "./components/signup-login/SignupLogin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PlatesPage from "./components/plates/PlatesPage";
import AddPlate from "./components/plates/AddPlate";
import "./assets/css/404error.css";
import ScrollToTop from "./components/ScrollToTop";

export function isInputNumber(evt) {
  const ch = String.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}
function NavRoute({ exact, path, component: Component }) {
  let auth = localStorage.getItem("restaurante");
  let verification = auth ? true : false;
  if (path === "/") {
    verification = true;
  }
  console.log(auth);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        verification ? (
          <div>
            <NavBar />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/"></Redirect>
        )
      }
    />
  );
}
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
      <ScrollToTop />
      <Switch>
        <NavRoute exact path="/" component={Landing} />
        <Route exact path="/#how-it-works"></Route>
        <NavRoute exact path="/signup-login" component={SignupLogin} />
        <NavRoute exact path="/platos" component={PlatesPage} />
        <NavRoute exact path="/plato" component={AddPlate} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;

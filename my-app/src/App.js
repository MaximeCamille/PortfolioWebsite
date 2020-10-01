import React, { Component } from 'react';
import { Route, Switch, /*Redirect*/ } from "react-router-dom";

import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Skills from './pages/Skills';
import SignUp from './pages/Sign-up';
import Login from './pages/Login';
import ForgotPW from './pages/ForgotPW';

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.currentUser != null ?
      <Component {...props} />
    :
      <Redirect to="/Login" />
  )}/>
);
*/

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Services" component={Services} />
          <Route path="/Sign-up" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/Forgot-PW" component={ForgotPW} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';


// Import css
import './css/pe-icon-7-stroke.css';
import './css/materialdesignicons.min.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/style.css';
import './css/orange.css';

const Home = React.lazy(() => import('./pages/Home'));

const Signin = React.lazy(() => import('./pages/Auth/signin'));
const Signup = React.lazy(() => import('./pages/Auth/signup'));
const FormDataCollection = React.lazy(() => import('./pages/Auth/formDataCollection'));
const FormDesign = React.lazy(() => import('./pages/Auth/formDesign'));
const FormConstruction = React.lazy(() => import('./pages/Auth/formConstruction'));

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        fname: '',
        email: '',
        loggedIn: false
      }
    }
  }

  modifyUser = (first_name, email, is_logged_in) => {
    this.setState({ user: { fname: first_name, email: email, loggedIn: is_logged_in } })
  }

  render() {

    return (
      <React.Fragment>

        <Router>
          <React.Suspense fallback={<div>&nbsp;</div>}>
            <Switch>

              <Route path="/home">
                <Home usr={this.state.user} />
              </Route>

              <Route path="/formdatacollection"
                component={(props) => <FormDataCollection {...props} loggedIn={this.state.user.loggedIn} mail={this.state.user.email}/>}
              />

              <Route path="/formdesign"
                component={(props) => <FormDesign {...props} loggedIn={this.state.user.loggedIn} mail={this.state.user.email}/>}
              />

              <Route path="/formConstruction"
                component={(props) => <FormConstruction {...props} loggedIn={this.state.user.loggedIn} mail={this.state.user.email}/>}
              />

              <Route path="/signin"
                component={(props) => <Signin {...props} modifyUser={this.modifyUser} />}
              />

              <Route path="/signup" component={Signup} />

              <Route path="/">
                <Home usr={this.state.user} />
              </Route>
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}
export default withRouter(App);
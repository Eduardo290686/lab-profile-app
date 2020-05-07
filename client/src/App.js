import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SignUp from './components/signUp/SignUp';
import LogIn from './components/logIn/LogIn';
import AuthService from './services/authService';
import InfoService from './services/infoService';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null,
    };
    this.authService = new AuthService();
    this.infoService = new InfoService();
    this.campus = [];
    this.courses = [];
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.authService.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  getCampus = () => {
    return this.infoService.campus()
      .then((allCampus) => {
        this.campus = allCampus;
        console.log(this.campus);      
      })
  }

  getCourses = () => {
    return this.infoService.courses()
      .then((allCourses) => {
        this.courses = allCourses;
        console.log(this.courses);
      })
  }

  render() {
    this.getCampus()
    this.getCourses()
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Switch>
            <Route
              exact path='/'
              render={() => { return (<Home></Home>) }}
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route
              exact path='/'
              render={
                () => { return (<Home getUser={this.getTheUser}></Home>) }
              }
            />
            <Route
              exact path='/signUp'
              render={
                () => {
                  return (
                    <SignUp
                      getUser={this.getTheUser}
                      campus={this.campus}
                      courses={this.courses}
                    >
                    </SignUp>
                  )
                }
              }
            />
            <Route
              exact path='/logIn'
              render={
                () => { return (<LogIn getUser={this.getTheUser}></LogIn>) }
              }
            />
          </Switch>
        </div>
      );
    }
  }
}
export default App;

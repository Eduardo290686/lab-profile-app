import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
  render() {

    return (
      <div className="home-container">
        <h1 className="main-title">IronProfile</h1>
        <p className="home-paragraph">
          Today we will create al app with authoritation,
          adding some cool styles!
        </p>
        <div className="button-container">
          <Link
            className="link-container"
            to={"/signUp"}
          >
            <div className="login-signup-container">
              <p>Sign up</p>
            </div>
          </Link>
          <Link
            className="link-container"
            to={"/logIn"}
          >
            <div className="login-signup-container">
              <p>Log in</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
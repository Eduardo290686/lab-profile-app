import React, { Component } from 'react';
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
          <button>Sign up</button>
          <button>Log in</button>
        </div>
      </div>
    );
  }
}

export default Home;
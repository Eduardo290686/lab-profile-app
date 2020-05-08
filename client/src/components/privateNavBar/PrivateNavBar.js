import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './PrivateNavBar.css'

class PrivateNavBar extends Component {

  handleLogOut = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <nav>
        <button onClick={(event) => this.handleLogOut(event)} className="nav-link">Log out</button>
      </nav>
    );
  }
}

export default withRouter(PrivateNavBar);

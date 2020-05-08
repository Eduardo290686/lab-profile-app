import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to={"/"} className="nav-link">Home</Link>
      </nav>
    );
  }
}

export default NavBar;
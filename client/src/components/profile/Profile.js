import React, { Component } from 'react';
import PrivateNavBar from '../privateNavBar/PrivateNavBar';

class Profile extends Component {

  loggingOut = () => {
    this.props.logOut();
  };

  render() {
    return (
      <div>
        <PrivateNavBar logOut={this.loggingOut}></PrivateNavBar>
      </div>
    );
  }
}

export default Profile;

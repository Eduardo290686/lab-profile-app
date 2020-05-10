import React, { Component } from 'react';
import PrivateNavBar from '../privateNavBar/PrivateNavBar';
import InfoService from '../../services/infoService';
import './Profile.css';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.infoService = new InfoService();
    this.state = {
      userId: this.props.userId,
      user: {}
    }
    this.getUser();
  }

  loggingOut = () => {
    this.props.logOut();
  };

  getUser = () => {
    return this.infoService.getUser(this.state.userId)
      .then((currentUser) => {
        this.setState({
          user: currentUser
        })
      })
  }

  render() {
    return (
      <div>
        <PrivateNavBar logOut={this.loggingOut}></PrivateNavBar>
        <div className="info-container">
          <div className="info">
            <h1>Profile</h1>
            <p>Name: {this.state.user.username}</p>
            <p>Campus: {this.state.user.campus}</p>
            <p>Course: {this.state.user.course}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

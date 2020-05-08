import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import AuthService from '../../services/authService';
import { Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar'
import './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",
        });
        this.props.getUser(response);
        this.props.history.push("/profile");
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="form-container">
          <form onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <label>Password:</label>
            <input
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <input type="submit" value="Log in" className="submit" />
            <p className="added-paragraph">Don't you have an account?
            <Link to={"/signUp"} className="link">  Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(LogIn);

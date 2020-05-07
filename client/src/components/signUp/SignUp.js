import React, { Component } from 'react';
import AuthService from '../../services/authService';
import { Link } from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.service = new AuthService();
    this.campus = this.props.campus;
    this.courses = this.props.courses;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        this.props.getUser(response)
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.campus)
    console.log(this.courses)
    return (
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
          <label>Campus:</label>
          <select name="campus">
            <option value=""></option>
          </select>
          <input type="submit" value="Sign up" className="submit" />
          <p className="added-paragraph">Already have account?
            <Link to={"/logIn"} className="link">  Log in</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default SignUp;

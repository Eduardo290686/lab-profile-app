import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import AuthService from '../../services/authService';
import { Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
    this.campus = this.props.campus;
    this.courses = this.props.courses;
    this.state = {
      username: '',
      password: '',
      campusCity: this.campus[0].city,
      courseName: this.courses[0].name
    };
  }

  handleName = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleCampus = (event) => {
    this.setState({
      campusCity: event.target.value
    })
  }

  handleCourse = (event) => {
    this.setState({
      courseName: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const campus = this.state.campusCity;
    const course = this.state.courseName;
    this.service.signup(username, password, campus, course)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          campusCity: "",
          courseName: ""
        });
        this.props.getUser(response);
        this.props.updateId(response._id);
        this.props.history.push("/profile");
      })
      .catch(error => console.log(error))
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
              onChange={event => this.handleName(event)}
            />
            <label>Password:</label>
            <input
              name="password"
              value={this.state.password}
              onChange={event => this.handlePassword(event)}
            />
            <label>Campus:</label>
            <select
              name="campus"
              onChange={event => this.handleCampus(event)}
            >
              {
                this.campus.map((oneCampus, idx) => {
                  return (
                    <option
                      value={oneCampus.city}
                      key={idx}
                    >
                      {oneCampus.city}
                    </option>
                  )
                })
              }
            </select>
            <label>Course:</label>
            <select
              name="course"
              onChange={event => this.handleCourse(event)}
            >
              {
                this.courses.map((oneCourse, idx) => {
                  return (
                    <option
                      value={oneCourse.name}
                      key={idx}
                    >
                      {oneCourse.name}
                    </option>
                  )
                })
              }
            </select>
            <input type="submit" value="Sign up" className="submit" />
            <p className="added-paragraph">Already have account?
            <Link to={"/logIn"} className="link">  Log in</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp);

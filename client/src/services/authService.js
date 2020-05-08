import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3001/api/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, campus, course) => {
    return this.service.post('/signup', { username, password, campus, course })
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
      .then(response => response.data)
  }

  logout = (user) => {
    return this.service.post('/logout', user)
      .then(res => Promise.resolve(res.data))
      .catch(error => console.error(error))
  }

}

export default AuthService;

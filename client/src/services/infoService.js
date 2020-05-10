import axios from 'axios';

class InfoService {

  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3001/api/info',
      withCredentials: true
    });
    this.service = service;
  }

  /* Con esta ruta obtendremos todos los campus disponibles. */
  campus = () => {
    return this.service.get('/campus')
      .then(response => response.data)
  }

  /* Esta ruta nos proporcionará todos los cursos. */
  courses = () => {
    return this.service.get('/courses')
      .then(response => response.data)
  }

  getUser = (id) => {
    let userId = id
    return this.service.get(`/getUser/${userId}`)
      .then(response => response.data)
  }

}

export default InfoService;

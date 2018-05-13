import axios from 'axios';

class Api {
  logout() {
    axios.delete('/api/users/login');
  }

  getCourts() {
    return axios.get('/api/courts')
            .then(result => result.data)
            .catch(err => console.error(err));
  }
}

export default new Api();

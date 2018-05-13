import axios from 'axios';

class Api {
  login(username, password) {
    axios.post('/api/users/login', {username, password});
  }
  logout() {
    axios.delete('/api/users/login');
  }
}

export default new Api();

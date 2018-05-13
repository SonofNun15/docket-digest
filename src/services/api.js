import axios from 'axios';

class Api {
  logout() {
    axios.delete('/api/users/login');
  }
}

export default new Api();

import axios from 'axios';

class Api {
  login(username, password) {
    return axios.post('/api/users/login', {username, password})
      .then(result => result.data);
  }
  logout() {
    axios.delete('/api/users/login');
  }

  register(name, username, password) {
    return axios.post('/api/users', {name, username, password})
      .then(result => result.data);
  }

  getCourts() {
    return axios.get('/api/courts')
      .then(result => result.data);
  }

  subscribe(category, court, docketNumber) {
    return axios.post('/api/subscriptions', {
      category_identifier: category.identifier,
      court_identifier: court.identifier,
      docket_identifier: docketNumber,
    });
  }

  getSubscriptions() {
    return axios.get('/api/subscriptions')
      .then(result => result.data);
  }
}

export default new Api();

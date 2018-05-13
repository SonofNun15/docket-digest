import axios from 'axios';

class Api {
  login(username, password) {
    return axios.post('/api/users/login', {username, password})
        .then(result => result.data)
        .catch(err => console.error(err));
  }
  logout() {
    axios.delete('/api/users/login');
  }

  getCourts() {
    return axios.get('/api/courts')
            .then(result => result.data)
            .catch(err => console.error(err));
  }

  subscribe(category, court, docketNumber) {
    return axios.post('/api/subscriptions', {
      category_identifier: category.identifier,
      court_identifier: court.identifier,
      docket_identifier: docketNumber,
    });
  }
}

export default new Api();

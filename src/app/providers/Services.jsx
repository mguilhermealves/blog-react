import axios from 'axios';

class Services {
  constructor() {
    if (localStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    }
  }

  /**
   * Returns the URL with a query string params.
   * @param {string} URL
   * @param {Object} data
   */
  withParams(URL, data = {}) {
    const params = Object.keys(data).map(key => key + '=' + data[key]);

    if (params.length) {
      return URL + '?' + params.join('&');
    } else {
      return URL;
    }
  }
}

export default Services;

import axios from 'axios';
import Services from '../providers/Services';

// const configs = {
//   'Content-type': 'application/json',
//   'Authorization': 'Bearer ' + localStorage.getItem('token')
// }
class Notices extends Services {
  /**
   * Get Notices Api.
   * @param {object} data
   */
  async getNotices(data = {}) {
    return axios.get(this.withParams(`${process.env.REACT_APP_API_URL}/news`, data));
  }
}

export default new Notices();

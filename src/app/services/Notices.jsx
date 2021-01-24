import axios from 'axios';
import Services from '../providers/Services';

class Notices extends Services {
  /**
   * Get Notices Api.
   * @param {object} data
   */
  async notices(data = {}) {
    return axios.get(this.withParams(`${process.env.REACT_APP_API_URL}/campaigns/${campaign_id}/graphics/suppliers`, data));
  }
}

export default new Notices();

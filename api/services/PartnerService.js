'use strict';
import partners from './partnersData.js'

module.exports = {
  /**
   * Gets partner config info
   *
   * @param string from dynamic :partner req parameter
   * @return Object of partner info
   */
  getPartner: id => {
    if (!partners[id]) {
      throw new Error('no partner found');
    }
    return partners[id];
  },
  
  getOptInPath: id => {
    return partners[id].campaignKey;
  }
};

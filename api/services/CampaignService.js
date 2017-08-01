'use strict';
import campaigns from './campaignsData.js'

module.exports = {
  /**
   * Gets campaign config info
   *
   * @param string from dynamic :campaign required parameter
   * @return Object of campaign info
   */
  getCampaign: id => {
    if (!campaigns[id]) {
      throw new Error('no partner found');
    }
    return campaigns[id];
  },

  getOptInPath: id => {
    return campaigns[id].campaignKey;
  }
};

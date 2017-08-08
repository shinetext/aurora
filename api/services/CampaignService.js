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
      throw new Error('no campaign found');
    }
    return campaigns[id];
  },

  getOptInPath: id => {
    return campaigns[id].campaignKey;
  },

  /**
   * Gets opt-in path ID for beta users invited to Shine through this Campaign.
   *
   * @param id {string} Campaign ID
   * @return {string | undefined}
   */
  getBetaOptInPath: id => {
    return campaigns[id].campaignKeyBeta;
  },
};

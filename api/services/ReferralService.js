'use strict';

/**
 * The list of rewards and the number of successful invites someone needs to
 * earn the reward.
 */
var REWARDS = [
  {
    count: 10,
    reward: 'Shine sticker',
  },
  {
    count: 20,
    reward: 'Shine tote',
  },
  {
    count: 30,
    reward: 'Shine t-shirt',
  },
  {
    count: 50,
    reward: 'Shine call-out',
  },
  {
    count: 100,
    reward: 'Shine hoodie',
  },
  {
    count: 500,
    reward: 'Shine leggings',
  },
];

module.exports = {
  /**
   * Gets the text to display that to tease the next level of rewards.
   *
   * @param count Number of referrals
   * @return String for the teaser text
   */
  getNextLevel: function(count) {
    for (let i = 0; i < REWARDS.length; i++) {
      if (count >= REWARDS[i].count) {
        continue;
      } else {
        let numMore = REWARDS[i].count - count;
        let strFriends = numMore == 1 ? 'friend' : 'friends';
        return {
          message:
            'Invite ' +
            numMore +
            ' more ' +
            strFriends +
            ' to get a ' +
            REWARDS[i].reward +
            '!',
          count: REWARDS[i].count,
          reward: REWARDS[i].reward,
        };
      }
    }

    // Return empty string for people who've reached the max tier or if there's
    // some sort of error
    return {
      message: '',
      count: undefined,
      reward: '',
    };
  },
  getRefererInfo: function(response) {
    let refererInfo = response.body;
    // If Url doesn't exist throw an error
    if (response.statusCode !== 200) {
      throw new Error();
    } else {
      return refererInfo;
    }
  },
};

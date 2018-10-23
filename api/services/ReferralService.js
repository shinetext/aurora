'use strict';

/**
 * The list of rewards and the number of successful invites someone needs to
 * earn the reward.
 */
var REWARDS = [
  {
    count: 5,
    reward: 'Shine Squad Invitation',
  },
  {
    count: 10,
    reward: 'Shine Sticker',
  },
  {
    count: 20,
    reward: 'Shine T-shirt',
  },
  {
    count: 30,
    reward: 'Shine Journal',
  },
  {
    count: 50,
    reward: 'Shine Water Bottle',
  },
  {
    count: 100,
    reward: 'Shine Hoodie',
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
          message: `Invite ${numMore} more ${strFriends} to get a ${
            REWARDS[i].reward
          }!`,
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
};

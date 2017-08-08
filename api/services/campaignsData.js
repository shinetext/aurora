/**
 * Campaign Data for Microsite
 * Add keys to objects to create new campaigns
 * [Campaign Route Params]: {
 *  name: 'Campaign name',
 *    imageUrl: 'http://campaign_image_url_string',
 *    copy: 'Landing page copy',
 *    confirmation: {
 *      imageUrl: 'http://campaign_confirmation_image_url_string',
 *      copy: 'confirmation copy'
 *    },
 *    referralInfo: {
 *     header: 'Information/header for referral page',
 *     copy: 'Information/copy for referral page',
 *    },
 *    campaignKey: 'Mobile Commons partner opt-in path key'
 *    campaignKeyBeta: 'Mobile Commons partner friends-opt-in path key'
 * }
 * This is and initial template pigybacking on Cat's earlier work on Partner Microsite
 */

const campaignData = {
  flipside: {
    name: 'Flipside',
    imageUrl:
      'https://images.contentful.com/awpxl2koull4/3KqFZX83m0CCOiyII6kCi4/b635f7db3b7e9745cb06b2c9e5879bfc/BB76EYQM84.jpg?w=800&h=500&',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      copy: "You're all set!",
    },
    referralInfo: {
      header: 'You\'re signed up!' ,
      copy: 'Need money for school? Share to win the scholarship.'
    },
    campaignKey: process.env.FLIPSIDE_MOBILECOMMONS_KEY,
    campaignKeyBeta: 'RANDO-NUMERO-GENERO', // Key to recognize the campaign userrs we referred from 🤔
  },
};

export default campaignData;

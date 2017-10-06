/**
 * Partner Microsite Configs
 *
 * To add new partner, add new key with following data structure:
 *
 * [PARTNER_NAME_ROUTE_PARAM]: {
 *  name: 'Partner name',
 *    imageUrl: 'https://partner_image_url_string',
 *    copy: 'Landing page copy',
 *    confirmation: {
 *      imageUrl: 'https://partner_confirmation_image_url_string',
 *      copy: 'confirmation copy'
 *    },
 *    campaignKey: 'Mobile Commons partner opt-in path key'
 *    campaignKeyBeta: 'Optional key for signing up beta users',
 *     betaCount: Number controling the amount of referral input fields to display,
 *    },
 * }
 */
const partnersData = {
  rydel: {
    name: 'Sign up for confidence and positivity tips from Rydel!',
    imageUrl:
      'https://images.contentful.com/awpxl2koull4/VVLQ8XTSea46g2quYACMG/2d6b6d3b4787ed58367f10f09430998a/rydel_cropped.jpg',
    copy: '',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/YZZJNDPNPrq0w/giphy.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.RYDEL_MOBILECOMMONS_KEY,
  },
  'self-care-scholarship-2017': {
    name: '$1,000 Easy Self-Care Scholarship - Fall 2017',
    imageUrl: '/images/partners/scholarship/scholarship-2017-photo.jpg',
    copy:
      '<p>School can be stressful.</p><p>Sign up to get a free daily text message to help you practice self-care AND get a chance to earn cash for school.</p><p>To enter the $1,000 scholarship, sign up for <a href="/?utm_source=Shine&utm_medium=Scholarship">Shine</a> texts.</p><p><a href="/images/partners/scholarship/scholarship-winner-denisse.png">Previous Scholarship Winner</a></p>',
    confirmation: {
      imageUrl: '/images/partners/scholarship/confirmation.gif',
      copy: 'You’ve entered the Shine Self-Care Scholarship!',
    },
    campaignKey: 'OPF103C6C3AE571FD2082D4B7F18929F5B',
    additionalFormLink: {
      label: 'Official Scholarship Rules',
      link: '/files/scholarship-rules-9-16-17.pdf',
    },
  },
};

export default partnersData;

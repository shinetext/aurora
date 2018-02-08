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
  'kelly-clarkson': {
    name: 'Get texts inspired by Kelly Clarkson\'s new album <em>Meaning of Life</em>',
    imageUrl:
      '/images/partners/kelly-clarkson-2.png',
    copy: '',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/IJrLbXNKoNYFG/giphy.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.KELLY_CLARKSON_MOBILECOMMONS_KEY,
  },
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
  'gabrielle-union': {
    name:
      'Get texts inspired by Gabrielle Union\'s book <br/> <em>We\'re Going to Need More Wine</em>',
    imageUrl: '/images/partners/GabUnioncover_notype.png',
    copy: '',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/l3q2X3tmbWqZPWkuI/giphy.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.GB_UNION_MOBILECOMMONS_KEY,
  },
  '1111reset': {
    name:
      "Sign up for motivational texts inspired by Keyshia Cole's new album 11:11 Reset",
    imageUrl:
      'https://images.contentful.com/awpxl2koull4/NaJiiJyU0wa0Gs0aGg2ua/3987f0a1f5203259e399f763f880aa01/KEYSHIACOLE_1111RESET_CVR_CLEAN.jpg',
    copy: '',
    confirmation: {
      imageUrl:
        'https://images.contentful.com/awpxl2koull4/1SsNHkoxfKG2Mkim24KMaQ/90c8e69412aac14809bbd31f2ca6c401/KC-Title_black.jpg',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.KEYSHIA_MOBILECOMMONS_KEY,
  },
  snapchat: {
    name: 'Sign up for a daily text to help you feel your best.',
    imageUrl: '/images/partners/snapchat/snapchat-image-4.png',
    copy: '',
    confirmation: {
      imageUrl: '/images/confirmation-header.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.SNAPCHAT_MOBILECOMMONS_KEY,
  },
  'self-care-scholarship-2017': {
    name: '$500 Easy Self-Care Scholarship - Winter 2018',
    imageUrl: '/images/partners/scholarship/scholarship-2017-photo.jpg',
    copy:
      '<p>School can be stressful.</p><p>Sign up to get a free daily text message to help you practice self-care AND get a chance to earn cash for school.</p><p>To enter the $500 scholarship, sign up for <a href="/?utm_source=Shine&utm_medium=Scholarship">Shine</a> texts.</p><p><a href="/images/partners/scholarship/scholarship-winner-denisse.png">Previous Scholarship Winner</a></p>',
    confirmation: {
      imageUrl: '/images/partners/scholarship/confirmation.gif',
      copy: 'You’ve entered the Shine Self-Care Scholarship!',
    },
    campaignKey: 'OPF103C6C3AE571FD2082D4B7F18929F5B',
    additionalFormLink: {
      label: 'Official Scholarship Rules',
      link: '/files/Scholarship-Rules-2-7-18.pdf',
    },
  },
};

export default partnersData;

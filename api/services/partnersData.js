/**
 * Partner Microsite Configs
 *
 * To add new partner, add new key with following data structure:
 *
 * [PARTNER_NAME_ROUTE_PARAM]: {
 *  name: 'Partner name',
 *    imageUrl: 'http://partner_image_url_string',
 *    copy: 'Landing page copy',
 *    confirmation: {
 *      imageUrl: 'http://partner_confirmation_image_url_string',
 *      copy: 'confirmation copy'
 *    },
 *    campaignKey: 'Mobile Commons partner opt-in path key'
 * }
 */
const partnersData = {
  rydel: {
    name: 'Sign up for confidence and positivity tips from Rydel!',
    imageUrl: 'https://images.contentful.com/awpxl2koull4/VVLQ8XTSea46g2quYACMG/2d6b6d3b4787ed58367f10f09430998a/rydel_cropped.jpg',
    copy: '',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/YZZJNDPNPrq0w/giphy.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.RYDEL_MOBILECOMMONS_KEY,
  },
  scholarship: {
    name: '$1,000 Easy No Essay Self-Care Scholarship - Fall 2017',
    imageUrl: '/images/partners/scholarship/scholarship-2017-photo.jpg',
    copy: '<p>School can be stressful.</p><p>Sign up to get a free daily text message to help you practice self-care AND get a chance to earn cash for school.</p><p>To enter the $1,000 scholarship, sign up for Shine texts below & share with 3 friends.</p>',
    confirmation: {
      imageUrl: '/images/partners/scholarship/confirmation.gif',
      copy: 'You’ve entered the Shine Self-Care Scholarship!',
    },
    campaignKey: 'OPF103C6C3AE571FD2082D4B7F18929F5B',
    campaignKeyBeta: 'OP3969113B4E740F300A09B3D2D1D05CB8',
    additionalFields: [
      {
        type: 'textarea',
        name: 'scholarship_why_important',
        label: 'Why is self-care important to you? (optional)',
      },
    ],
    additionalFormLink: {
      label: 'Official Scholarship Rules',
      link: '/files/scholarship-rules-2017.pdf',
    },
  },
};

export default partnersData;

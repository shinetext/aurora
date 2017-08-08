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

  // @TODO
  scholarship: {
    name: 'Sign up with 3 friends for a chance to win a $6 scholarship!',
    imageUrl: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=d0gdH2%2FtWTo%2FrQhUVEizeQ53JdQ%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6nlh8Tw1It6a2FowGz60oISJLOTW3hGTrbi6DxERaYCLauCMPQ1QJlCV1w4X5FGqjXJE64bOfvbPaLDJYP78ChWuSNfyofOUkbsUxVwOUdMDcAnMecMtroThl82cJfIyWtNA',
    copy: 'Because 🏫 costs 💰💰💰💰💰💰.',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/YZZJNDPNPrq0w/giphy.gif',
      copy: "You're all signed up!",
    },
    campaignKey: 'OPF103C6C3AE571FD2082D4B7F18929F5B',
    campaignKeyBeta: 'OP3969113B4E740F300A09B3D2D1D05CB8',
    additionalFields: [
      {
        type: 'textarea',
        name: 'scholarship_why_important',
        label: 'Why is this important to you?',
      },
    ],
    additionalFormLink: {
      label: 'Scholarship Rules',
      link: '/images/shine-1-year.jpg',
    },
  },
};

export default partnersData;

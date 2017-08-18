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
    name: 'The Flip Side',
    imageUrl:
      'https://image.shutterstock.com/z/stock-photo-girl-with-cell-phone-and-books-304379273.jpg',
    copy:
      'Sign up for texts to show the flip side of the things that stress you out about going back to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You're all set!",
      copy: "lorem Ipsum Dolores Umbridge"
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Enter to win a $1,000 scholarship by sharing The Flip Side with friends.</br>(Money for school = one less thing you should have to stress out about this semester.)',
      buttonCopy: 'Share The Flip Side',
    },
    additionalFormLink: {
      label: 'Official Scholarship Rules',
      link: '/files/scholarship-rules-2017.pdf',
    },
    partners: [
      {
        name: 'KiK',
        logo:
          'https://images.contentful.com/awpxl2koull4/6BSKsZtRIs8w4K4m6K8ew8/f35abc8e9296799d1993fbc3ba249a52/Add_aheading.png',
        link: '#',
      },
      {
        name: 'Shine',
        logo:
          'http://www.themixedexperience.com/wp-content/uploads/2016/09/shine-logo.png',
        link: '#',
      },
    ],
    campaignKey: 'OP7DD1D17EA7893F17223937FB3428696C',
    campaignKeyBeta: 'OPFEC9FC9D0E3894D4A6BD4522FD2F2683',
  },
  umd: {
    name: 'The Flip Side',
    imageUrl: 'https://www.provost.umd.edu/images/umdimg10.jpg?w=800&h=800',
    copy: `Join other students from UMD & sign up for texts to show the flip side of the things that stress you out about going back to school.`,
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You're all set!",
      copy: "lorem Ipsum Dolores Umbridge"
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Enter to win a $1,000 scholarship by sharing The Flip Side with friends. (Money for school = one less thing you should have to stress out about this semester.)',
      buttonCopy: 'Share The Flip Side',
    },
    additionalFormLink: {
      label: 'Official Scholarship Rules',
      link: '/files/scholarship-rules-2017.pdf',
    },
    partners: [
      {
        name: 'KiK',
        logo:
          'https://images.contentful.com/awpxl2koull4/6BSKsZtRIs8w4K4m6K8ew8/f35abc8e9296799d1993fbc3ba249a52/Add_aheading.png',
        link: '#', //TODO Get link for kik
      },
      {
        name: 'Shine',
        logo:
          'http://www.themixedexperience.com/wp-content/uploads/2016/09/shine-logo.png',
        link: 'www.shinetext.com/?utm_source=Shine&utm_medium=FlipsidePage',
      }
    ],
    campaignKey: 'OP7DD1D17EA7893F17223937FB3428696C',
    campaignKeyBeta: 'OPFEC9FC9D0E3894D4A6BD4522FD2F2683',
  },
};

export default campaignData;

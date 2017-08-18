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
      '/images/campaigns/flipside/flipside.png',
    copy:
      'Sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
    imageUrl:
      '/images/campaigns/flipside/Maryland.png',
    copy:
      'Join other students from University of Maryland & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  wts: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/wesley.png',
    copy:
      'Join other students from Wesley Theological Seminary & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  ucla: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/ucla.png',
    copy:
      'Join other students from UCLA & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  psuga: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/penn-state-greater-allegheny.png',
    copy:
      'Join other students from Penn State Greater Allegheny & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  ballstate: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/ball-state-university.png',
    copy:
      'Join other students from Ball State University & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  utm: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/university-of-tennessee-at-martin.png',
    copy:
      'Join other students from University of Tennessee at Martin & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  lonestar: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/lone-star-college.png',
    copy:
      'Join other students from Lone Star College & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  niu: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/northern-illinoise-university.png',
    copy:
      'Join other students from Northern Illinois University  & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  uva: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/university-of-virginia.png',
    copy:
      'Join other students from University of Virginia & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  willamette: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/willamette-university.png',
    copy:
      'Join other students from Willamette University & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  morgan: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/morgan-state.png',
    copy:
      'Join other students from Morgan state & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
  cahs: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/chicago-academy-high-school.png',
    copy:
      'Join other students from Chicago Academy High school & sign up to get 5 days of free texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: "You’ve entered the scholarship!",
      copy: "Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link."
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
};

export default campaignData;

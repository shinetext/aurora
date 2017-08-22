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
    imageUrl: '/images/campaigns/flipside/flipside.png',
    copy:
      'Sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  umd: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/Maryland.png',
    copy:
      'Join other students from University of Maryland & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  wts: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/wesley.png',
    copy:
      'Join other students from Wesley Theological Seminary & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  ucla: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/ucla.png',
    copy:
      'Join other students from UCLA & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  psuga: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/penn-state-greater-allegheny.png',
    copy:
      'Join other students from Penn State Greater Allegheny & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  ballstate: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/ball-state-university.png',
    copy:
      'Join other students from Ball State University & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  utm: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/university-of-tennessee-at-martin.png',
    copy:
      'Join other students from University of Tennessee at Martin & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  lonestar: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/lone-star-college.png',
    copy:
      'Join other students from Lone Star College & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  niu: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/northern-illinoise-university.png',
    copy:
      'Join other students from Northern Illinois University  & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  uva: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/university-of-virginia.png',
    copy:
      'Join other students from University of Virginia & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  willamette: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/willamette-university.png',
    copy:
      'Join other students from Willamette University & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  morgan: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/morgan-state.png',
    copy:
      'Join other students from Morgan State & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  cahs: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/chicago-academy-high-school.png',
    copy:
      'Join other students from Chicago Academy High School & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  waynestate: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/wayne.png',
    copy:
      'Join other students from Wayne State University & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  anderson: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/anderson-university.png',
    copy:
      'Join other students from Anderson University & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  concordia: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/concordia-college.png',
    copy:
      'Join other students from Concordia College & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  wvc: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/wenatchee-valley-college.png',
    copy:
      'Join other students from Wenatchee Valley College & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  illini: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/university-of-illinois.png',
    copy:
      'Join other students from University of Illinois & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  vanderbilt: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/vanderbilt-university.png',
    copy:
      'Join other students from Vanderbilt University & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  rollins: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/rollins-college.png',
    copy:
      'Join other students from Rollins College & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  tcnj: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/college-of-new-jersey.png',
    copy:
      'Join other students from The College of New Jersey & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  txwu: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/texas-womans-university.png',
    copy:
      "Join other students from Texas Woman's University  & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school. ",
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  harcum: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/harcum.png',
    copy:
      'Join other students from Harcum College & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  buddyproject: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/buddy-project-members.png',
    copy:
      'Join other students from Buddy Project & sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  mwsu: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/missouri-western-state-university.png',
    copy:
      'Join other students from Missouri Western State University sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  csu: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/csu-bakersfield.png',
    copy:
      'Join other students from CSU Bakersfield sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  rit: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/rit.png',
    copy:
      'Join other students from Rochester Institute of Technology sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
  upenn: {
    name: 'The Flip Side',
    imageUrl: '/images/campaigns/flipside/university-of-pennsylvania.png',
    copy:
      'Join other students from University of Pennsylvania sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
    buttonCopy: 'Sign Up',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif',
      header: 'You’ve entered the scholarship!',
      copy:
        'Earn free Shine swag (think, hoodies & leggings!) for sharing your unique referral link.',
    },
    referralInfo: {
      header: 'You’ve signed up for The Flip Side! ',
      copy:
        'Money for school = one less thing you should have to stress out about this semester.</br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
        link: 'https://www.kik.com/bots/shinetext/',
      },
    ],
    scholarshipInfo: {
      hasScholarship: true,
      type: 'hidden',
      fieldName: 'flipside_scholarship_entry',
    },
    campaignKey: 'OP0D8691F57C03FCAAA3DAE2E72D8EDC58',
    campaignKeyBeta: 'OPFF3D22E738C6D9897A5F6855BFB80138',
  },
};

export default campaignData;

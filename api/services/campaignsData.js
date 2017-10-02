/**
 * Campaign Data for Microsite
 * Add keys to objects to create new campaigns
 * [Campaign Route Params]: {
 *  name: 'Campaign name',
 *    imageUrl: 'https://campaign_image_url_string',
 *    copy: 'Landing page copy',
 *    confirmation: {
 *      imageUrl: 'https://campaign_confirmation_image_url_string',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
  },
  wsu: {
    name: 'The Flip Side',
    imageUrl:
      '/images/campaigns/flipside/washington-state-university-tri-cities.png',
    copy:
      'Join other students from Washington State University Tri-Cities sign up to get 5 days of texts to help you see the flip side of things we all stress out about when heading to school.',
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
        'Money for school = one less thing you should have to stress out about this semester.</br></br>Enter to win a $1,000 scholarship by sharing The Flip Side with friends.',
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
    campaignKey: 'OP52EB808356971C15C03BD2577DA62DD6',
    campaignKeyBeta: 'OPFB3F780A3CC49AF7048362002A3A8F5E',
  },
};

export default campaignData;

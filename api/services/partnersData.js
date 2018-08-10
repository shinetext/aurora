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
 *    alphaEmailRequired: true/false, // Optional. Add email input field to the signup form
 *    signUpButtonText: 'Enter', // Optional. Customized text on the submit button
 *    hideForm: true/false, // Optional. Hides the signup form if set to true
 * }
 */
const partnersData = {
  'kelly-clarkson': {
    name:
      "Get texts inspired by Kelly Clarkson's new album <em>Meaning of Life</em>",
    imageUrl: '/images/partners/kelly-clarkson-2.png',
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
      'https://images.ctfassets.net/awpxl2koull4/VVLQ8XTSea46g2quYACMG/2d6b6d3b4787ed58367f10f09430998a/rydel_cropped.jpg',
    copy: '',
    confirmation: {
      imageUrl: 'https://media.giphy.com/media/YZZJNDPNPrq0w/giphy.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.RYDEL_MOBILECOMMONS_KEY,
  },
  'gabrielle-union': {
    name:
      "Get texts inspired by Gabrielle Union's book <br/> <em>We're Going to Need More Wine</em>",
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
      'https://images.ctfassets.net/awpxl2koull4/NaJiiJyU0wa0Gs0aGg2ua/3987f0a1f5203259e399f763f880aa01/KEYSHIACOLE_1111RESET_CVR_CLEAN.jpg',
    copy: '',
    confirmation: {
      imageUrl:
        'https://images.ctfassets.net/awpxl2koull4/1SsNHkoxfKG2Mkim24KMaQ/90c8e69412aac14809bbd31f2ca6c401/KC-Title_black.jpg',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.KEYSHIA_MOBILECOMMONS_KEY,
  },
  snapchat: {
    name: 'Sign up for a daily text to help you feel your best.',
    imageUrl: '/images/partners/snapchat/snapchat-image-4.png',
    copy: '',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.SNAPCHAT_MOBILECOMMONS_KEY,
  },
  'self-care-scholarship-2017': {
    name: 'The $500 Self-Care Scholarship is no longer running.',
    imageUrl: '/images/partners/scholarship/scholarship-2017-photo.jpg',
    copy:
      'However, you can sign up to get a free daily text message from Shine to help you practice self-care and stress less this school year.',
    confirmation: {
      imageUrl: '/images/partners/scholarship/confirmation.gif',
      copy: 'You’ve entered the Shine Self-Care Scholarship!',
    },
    campaignKey: 'OPB1AA249928CF5621FE3CA64715CB1B44',
  },
  'summersweeps-girlboss': {
    name: 'This giveaway is no longer running',
    imageUrl: '/images/partners/girlboss-giveaway.jpg',
    copy:
      '<p>Self-care isn’t just face masks and bubble baths—it means something different to everyone. This summer, snag some extra cash from Shine & Girlboss to help you practice your style of self-care. Whether it’s a weekend getaway with the VIPs in your life or paying off bills, we got you. </p><p>Enter to win $1,000 plus, a free year long subscription to the <a href="https://go.onelink.me/app/219fc510"/>Shine app</a> & the Girlboss Academy to inspire you all year long.</p>',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're entered to win!",
    },
    additionalFormLink: {
      label: 'Open to U.S. residents only. Official rules here.',
      link: '/files/July_2018_1000_Self-Care_Sweeps.pdf',
    },
    campaignKey: 'OP39C0317FB30329CE81C46936C5DFE198',
    alphaEmailRequired: true,
    signUpButtonText: 'Enter',
    hideForm: true,
  },
  'summersweeps-shine': {
    name: 'This giveaway is no longer running',
    imageUrl: '/images/partners/girlboss-giveaway.jpg',
    copy:
      '<p>Self-care isn’t just face masks and bubble baths—it means something different to everyone. This summer, snag some extra cash from Shine & Girlboss to help you practice your style of self-care. Whether it’s a weekend getaway with the VIPs in your life or paying off bills, we got you. </p><p>Enter to win $1,000 plus, a free year long subscription to the <a href="https://go.onelink.me/app/219fc510"/>Shine app</a> & the Girlboss Academy to inspire you all year long.</p>',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're entered to win!",
    },
    additionalFormLink: {
      label: 'Open to U.S. residents only. Official rules here.',
      link: '/files/July_2018_1000_Self-Care_Sweeps.pdf',
    },
    campaignKey: 'OP57EC434BD4A0CC3EFC5CB959EF7D9824',
    alphaEmailRequired: true,
    signUpButtonText: 'Enter',
    hideForm: true,
  },
  'valentines-day': {
    name: 'Be your own boo.',
    imageUrl: '/images/partners/love_yourself_first.jpg',
    copy:
      '<p>Sign up for free texts to show some love to the most important person in your life: you.</p><div class="partner-gif"><img src="/images/partners/falling_hearts.gif"/></div>',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.VALENTINE_MOBILECOMMONS_KEY,
  },
  igs: {
    name: 'A daily text to help you thrive',
    imageUrl: '/images/homepage/homepage_photo_1.jpg',
    copy: '<p>Join over 2M people who start their morning with Shine.</p>',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.INSTAGRAM_STORIES_MOBILECOMMONS_KEY,
  },
  feels: {
    name: 'Embrace all the feels',
    imageUrl: '/images/partners/ALL_THE_FEELS_LANDING_PAGE.png',
    copy:
      '<p>Sign up for texts from Shine to help you celebrate & embrace all of your feelings this Mental Health Month.</p>',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.ALL_THE_FEELS_MOBILECOMMONS_KEY,
    additionalFormLink: {
      label: 'Read Up on all of the feels',
      link:
        'https://advice.shinetext.com/tags/all-the-feels/?utm_source=Shine&utm_medium=PartnerPage&utm_campaign=AllTheFeels',
    },
  },
  nod: {
    name: 'A daily text to help you thrive',
    imageUrl: '/images/homepage/homepage_photo_1.jpg',
    copy: '<p>Join over 2M people who start their morning with Shine.</p>',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're all signed up!",
    },
    campaignKey: 'OP6DF7962B5D3CCC7F635D6BCD6713F25A',
  },
  wybmn: {
    name: 'Get texts from Shine inspired by Mr. Rogers',
    imageUrl: '/images/partners/mr-rogers-shine.png',
    copy: '<p>"Won\'t You Be My Neighbor?" in Theaters June 8</p>',
    confirmation: {
      imageUrl: '/images/confirmation-header-happy-dance.gif',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.MR_ROGERS_MOBILECOMMONS_KEY,
  },
};

export default partnersData;

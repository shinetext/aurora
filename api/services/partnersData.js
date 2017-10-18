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
  '1111reset': {
    name: 'Sign up for motivational texts inspired by Keyshia Cole\'s new album 11:11 Reset',
    imageUrl:
      'https://public.boxcloud.com/api/2.0/internal_files/230941827556/versions/243758160868/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!5dr3vljsE67jxlKZz3Pa8r4xn6KOXjxCLdS30aUaz8hNGNGO4hCkHMCa5T8ZRVsT78uCMCWep_WIaA62hvsP0TOxM189nF1a5jwY9TMl90OkeehlUilTZLXFSfdlmLR62ZZV2Gmq5mnows-ZBC4s5l9Xpng3nd6JXdzO3_S-peVoOo82kVQEqh0yl_0U6QKRc10Q-sU7DuIBx0Z1FZkNydjhhDLr8kEkptP0NhEn_xQnQrQ8XNHUL5aeHqXUxQeD40LOQWeoairht0W1akv8tr1hBU6f6OX2kDqqf5NULFyRXfeISAzrR0yUS4T2ZcBXdB3CEspGHBAGe_hHM40JwTMlKS6ZjOFpoicN9RnI-xDz00TKe8jXMG8rGFtaHcnUp2EUHzNocg-zm0Fj&shared_link=https%3A%2F%2Fsm01.app.box.com%2Fs%2F3fx4zlhotly5z03k62gi1ugdghun0230&box_client_name=box-content-preview&box_client_version=1.13.0',
    copy: '',
    confirmation: {
      imageUrl: 'https://public.boxcloud.com/api/2.0/internal_files/233615006533/versions/246506889541/representations/png_paged_2048x2048/content/1.png?access_token=1!89AKZ4tnPE8tQNb7UajmInaGoSY-Gb1eN300J7Lg5QMxJ0V8jij2VEME_HvKUZvcWcrhNftf7Mg8h5evhtyj6OGWk4qsSAL86HjGJUXD2X55i6v1G23xr3whSdRsM_sDEV194RF6YileOzFClrkx1zazk9oIfUHxQTeKOcvECxBPvUDr2lVnoCYd-Q_Ym4--NyRUzUGpoS2NYjqfLYYEfNAL02_M6Lm1H0lknRr71yqmzYbReNia90Sx669WRK50Qx3AYnkZrxEbaim6_9zkqGN_Z8OtSEUIDvPGR7tOD9ee05xLD3ma4y7m4XxXlNea5DkxZH44pfCkZecM4qvK8qL92iCUVu5opUnW8MI_7HzZYyAkRaShMDzIks-iWdBP_EV3QDdJkObtl_xB&shared_link=https%3A%2F%2Fsm01.app.box.com%2Fs%2F3fx4zlhotly5z03k62gi1ugdghun0230&box_client_name=box-content-preview&box_client_version=1.13.0',
      copy: "You're all signed up!",
    },
    campaignKey: process.env.KEYSHIA_MOBILECOMMONS_KEY,
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

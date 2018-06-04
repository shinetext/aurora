/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

  globals: {
    // Base URL for advice content
    adviceBaseUrl: process.env.ADVICE_BASE_URL,

    // Base URL for the Daily Shine content
    dailyShineBaseUrl: process.env.DAILY_SHINE_BASE_URL,

    // External url where Shine jobs are posted
    jobsRedirectUrl: process.env.JOBS_REDIRECT_URL,

    // The Mobile Commons URL to send join requests to
    mcJoinUrl: 'http://localhost:1337/mc-join',

    // Mobile Commons auth
    mobileCommonsUser: process.env.MOBILECOMMONS_USER,
    mobileCommonsPassword: process.env.MOBILECOMMONS_PASSWORD,

    // The Photon API URL
    photonApiUrl: process.env.PHOTON_API_URL || 'http://localhost:1338',

    // MailChimp
    mailchimpApiAuthUser: process.env.MAILCHIMP_API_USER,
    mailchimpApiAuthPass: process.env.MAILCHIMP_API_PASSWORD,
    mailchimpApiUrl: process.env.MAILCHIMP_API_URL,
    mailchimpListId: process.env.MAILCHIMP_LIST_ID,

    // AWS SNS
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    serviceRegion: process.env.AWS_DEFAULT_REGION,
    snsTopicReferral: process.env.SNS_TOPIC_ARN_REFERRAL,
  },
};

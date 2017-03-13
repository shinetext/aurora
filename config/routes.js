/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

var routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'WebViewController.home',
  '/home': 'WebViewController.home',

  '/advice': 'WebViewController.advice',
  '/articles': 'WebViewController.advice',
  '/articles/*': 'WebViewController.articlesRedirect',

  '/confirmation': 'WebViewController.confirmation',

  '/daily': 'WebViewController.daily',

  '/faq': {
    view: 'faq',
    locals: {
      title: 'FAQ | Shine',
      layout: 'layouts/subpage.layout'
    }
  },

  '/jobs': {
    view: 'jobs',
    locals: {
      title: 'Careers | Shine',
      layout: 'layouts/subpage.layout'
    }
  },

  '/privacy-policy': {
    view: 'privacy-policy',
    locals: {
      title: 'Privacy Policy | Shine',
      layout: 'layouts/subpage.layout'
    }
  },

  '/referrals': {
    view: 'referrals',
    locals: {
      title: 'Referrals | Shine',
      layout: 'layouts/subpageCustomHeader.layout',
      headerImage: 'images/refer-header.gif',
      headerText: 'Shine with friends!',
    }
  },

  '/referrals/:phone': 'WebViewController.myReferral',

  '/sms-settings': 'WebViewController.smsSettings',

  '/squad': {
    view: 'squad',
    locals: {
      title: 'Squad | Shine',
      metaDescription: "The Shine Squad is a supportive community of people who lift others up and motivate others to be their best. Be the first to get updates from the Shine team and have a community to brag about your wins and lean on when you're not feeling so hot",
      layout: 'layouts/subpage-fullwidth.layout',
      hideFooterCta: true,
    },
  },

  '/shinevisor*': 'WebViewController.talk',
  '/talk*': 'WebViewController.talk',

  '/terms-of-service': {
    view: 'terms-of-service',
    locals: {
      title: 'Terms of Service | Shine',
      layout: 'layouts/subpage.layout',
    },
  },

  '/try-messenger': {
    view: 'try-messenger',
    locals: {
      title: 'Try Messenger | Shine',
      layout: 'layouts/subpage.layout'
    },
  },

  '/500': {
    view: '500'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'post /join': 'WebActionsController.join',
  'post /save-settings': 'WebActionsController.saveSettings',
  'post /sms-invite': 'WebActionsController.smsInvite',
};

/**
 * Routes that should not exist on production can go here.
 */
if (process.env.NODE_ENV !== 'production') {
  routes['post /mc-join'] = 'TestController.ok';
}

module.exports.routes = routes;
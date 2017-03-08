'use strict';

/**
 * @see http://sailsjs.org/documentation/concepts/testing#?bootstraptestjs
 */

const sails = require('sails');

before(done => {
  // Note: timeout increased in test/mocha.opts to allow Sails enough time to lift
  sails.lift({}, err => {
    if (err) return done(err);
    done(err, sails);
  });
});

after(done => {
  sails.lower(done);
});
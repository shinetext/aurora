/**
 * `babel`
 *
 * ---------------------------------------------------------------
 *
 * Compiles JSX and ES6
 * 
 *
 * For usage docs see:
 *   https://github.com/babel/grunt-babel
 *
 */
module.exports = function(grunt) {

  grunt.config.set('babel', {
    options: {
      sourceMap: true,
      presets: ['react']
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};

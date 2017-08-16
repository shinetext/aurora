module.exports = function(grunt) {

    grunt.config.set('browserify', {
      dev: {
        src: [
            "./assets/react-js/partner.js",
          ],
          dest: '.tmp/public/react-js/partner.js',
          options: {
            browserifyOptions: { debug: true },
            transform: [["babelify", { "presets": ["env", "react"] }]],
          }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

};
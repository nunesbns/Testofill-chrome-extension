module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: ['Gruntfile.js', 'src/content/*.js','src/extension/*.js'],
      options: {
        esversion: 6
      }
    },
    concat: {
       content: {
          src: ['lib/shared/*.js','lib/content/*.js','src/content/*.js'],
          dest: 'src/extension/generated/form-filler-content-packed.js'
       }
    },
    compress: {
      main: {
        options: {
          archive: 'form-filler-dist.zip'
        },
        expand: true,
        cwd: 'src/extension/',
        src: ['**'],
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'src/**/*.js', '!src/extension/generated/**/*'],
        tasks: ['development']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('development', ['jshint','concat']);
  grunt.registerTask('default', ['jshint','concat','compress']);

};

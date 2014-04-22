module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
 
    // UGLYFY
    uglify: {
    my_target: {
        files: {
          'src/script.min.js': ['js/tableau.js', 'js/circleMenu.js', 'js/interface.js', 'js/jquery.transit.min.js', 'js/colorpicker.min.js', 'jquery.ui.mouse.js']
        }
      }
    },

    // CSS MIN
    cssmin: {
    combine: {
      files: {
        'src/style-min.css': ['css/style.css', 'css/circleMenu.css', 'css/font.css', 'css/italic.css', 'css/jquery-ui.css', 'css/responsive.css', 'css/new.css', 'css/glyphicons.css']
      }
    }
  },

    // WATCH
    watch: {
      scripts: {
        files: 'js/*.js',
        tasks: ['uglify']
      },
      styles: {
        files: '**/*.css',
        tasks: ['cssmin']
      }
    }


  });

  // Import package
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify','cssmin','watch']);
}
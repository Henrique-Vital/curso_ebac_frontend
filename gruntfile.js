module.exports = function(grunt) {

    
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "dist/css/styles.min.css": "src/less/styles.less"
          }
        }
      },
      uglify: {
        options: {
          compress: true,
          mangle: true,
          sourceMap: true
        },
        my_target: {
          files: {
            'dist/js/scripts.min.js': ['src/js/*.js']
          }
        }
      }
    });
  
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    
    grunt.registerTask('default', ['less', 'uglify']);
  
  };
  

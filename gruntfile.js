module.exports = function(grunt) {

    // Configuração das tarefas
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
  
    // Carrega os plugins que provêm as tarefas
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Registra as tarefas
    grunt.registerTask('default', ['less', 'uglify']);
  
  };
  
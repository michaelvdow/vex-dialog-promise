module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dialog: {
        src: 'src/vex.dialog.promise.js',
        dest: 'dist/vex.dialog.promise.js',
        options: {
          browserifyOptions: {
            'standalone': 'vexDialogPromise'
          }
        }
      }
    },

    uglify: {
      dialog: {
        src: 'dist/vex.dialog.promise.js',
        dest: 'dist/vex.dialog.promise.min.js',
        options: {
          banner: '/*! vex.dialog.promise.min.js <%= pkg.version %> */\n',
          report: 'gzip'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['browserify', 'uglify'])
}

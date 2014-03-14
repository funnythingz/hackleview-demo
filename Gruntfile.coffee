module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files: 'public/build.min.js': ['public/build.js']

    concat:
      hackleview:
        src: ['src/**/*.js']
        dest: 'public/build.js'

      options:
        separator: ';'

    copy:
      dist:
        files: [{
          src: ['hbs/**/*.hbs']
          dest: 'public/'
        }]

    typescript:
      base:
        src: ['src/**/*.ts', 'tests/**/*.ts']
        options:
          sourceMap: false

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      typescript:
        files: ['src/**/*.ts', 'tests/**/*.ts', 'hbs/**/*.hbs']
        tasks: ['typescript', 'concat', 'uglify', 'clean', 'copy']
        options:
          atBegin: true

      css:
        files: ['sass/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'public/hbs/**/*.hbs']

    connect:
      server:
        options:
          port: 8000
          base: 'public'
          keepalive: true

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'clean', 'copy', 'compass'])
  grunt.registerTask('server', ['connect'])

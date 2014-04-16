module.exports = (grunt)->

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

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files: 'build/app.min.js': ['build/app.js']

    concat:
      hackleview:
        src: ['src/ts/**/*.js']
        dest: 'build/app.js'

      options:
        separator: ';'

    copy:
      dist:
        files: [{
          expand: true
          cwd: 'src/hbs/'
          src: ['**/*.hbs']
          dest: 'build/hbs/'
        }]

      assets:
        files: [{
          expand: true
          cwd: 'assets/imgs/'
          src: ['**/*.png']
          dest: 'build/imgs/'
        }]

      jquery:
        files: [{
          expand: true
          cwd: 'bower_components/jquery/dist/'
          src: ['jquery.min.js']
          dest: 'build/js/'
        }]

      handlebars:
        files: [{
          expand: true
          cwd: 'bower_components/handlebars/'
          src: ['handlebars.min.js']
          dest: 'build/js/'
        }]

    typescript:
      base:
        src: ['src/ts/**/*.ts', 'tests/**/*.ts']
        options:
          sourceMap: false

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      typescript:
        files: ['src/ts/**/*.ts', 'tests/**/*.ts', 'src/hbs/**/*.hbs']
        tasks: ['typescript', 'concat', 'uglify', 'clean', 'copy']
        options:
          atBegin: true

      css:
        files: ['src/scss/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['src/ts/**/*.js', 'build/hbs/**/*.hbs']

    connect:
      server:
        options:
          port: 8000
          base: 'build'
          keepalive: true

  })

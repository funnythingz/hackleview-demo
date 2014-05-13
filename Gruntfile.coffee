module.exports = (grunt)->

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-handlebars')

  grunt.registerTask('default', ['typescript', 'handlebars', 'concat', 'uglify', 'clean', 'copy', 'compass'])
  grunt.registerTask('server', ['connect'])

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files: 'build/app.min.js': ['build/app.js']

    handlebars:
      compile:
        options:
          namespace: 'HACKLE_HBS.Templates'

        files:
          'src/hbs/hbs-templates.js': [ 'src/hbs/**/*.hbs']

    concat:
      hackleview:
        src: ['src/hbs/hbs-templates.js', 'src/ts/**/*.js']
        dest: 'build/app.js'

      options:
        separator: ';'

    copy:
      html:
        files: [{
          expand: true
          cwd: 'src/html/'
          src: ['**/*.html']
          dest: 'build/'
        }]

      hbs:
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

      fastclick:
        files: [{
          expand: true
          cwd: 'bower_components/fastclick/lib/'
          src: ['fastclick.js']
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
        files: ['src/ts/**/*.ts', 'src/hbs/**/*.hbs', 'src/html/**/*.html', 'tests/**/*.ts']
        tasks: ['typescript', 'handlebars', 'concat', 'uglify', 'clean', 'copy']
        options:
          atBegin: true

      css:
        files: ['src/scss/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['src/hbs/**/*.js', 'src/ts/**/*.js', 'build/hbs/**/*.hbs']

    connect:
      server:
        options:
          port: 8000
          base: 'build'
          keepalive: true

  })

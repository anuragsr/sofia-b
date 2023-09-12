module.exports = grunt => {
  grunt.initConfig({
    connect: {
      server:{
        options: {  
          // open: true,
          hostname: "0.0.0.0",
          port: 8080,
          livereload: 35729
        }
      }
    },
    // Watches for changes and runs tasks
    // Livereload is setup for the 35729 port by default    
    watch: {
      options: {
        interval: 0,
        dateFormat: function(time) {
          // grunt.log.writeln('Completed in ' + time + 'ms at' + (new Date()).toString())
          grunt.log.writeln('Ready.'["blue"].bold)
        },
      },
      html: {
        files: ["**/*.html",  "!node_modules/*.*"],
        options: { livereload: true }
      },
      php: {
        files: ["**/*.php",  "!node_modules/*.*"],
        options: { livereload: true }
      },
      sass: {
        files: ["**/*.sass", "!node_modules/*.*"],
        tasks: ["sass:dev"]
      },
      js: {
        files: ["**/*.js",  "!node_modules/*.*"],
        options: { livereload: true }
      },
      css: {
        files: ["**/*.css",  "!node_modules/*.*"],
        options: { livereload: true }
      },
      img: {
        files: ["**/*.jpg", "**/*.jpeg", "**/*.png", "!node_modules/*.*"],
        options: { livereload: true }
      }
    },
    // Sass object
    sass: {
      dev: {
        files: {
          "css/common.css"   : "sass/common.sass",
          "css/header.css"   : "sass/header.sass",
          "css/home.css"     : "sass/home.sass",
          "css/work.css"     : "sass/work.sass",
          "css/about.css"    : "sass/about.sass",
          "css/course.css"   : "sass/course.sass",
          "css/hire.css"     : "sass/hire.sass",
          "css/footer.css"   : "sass/footer.sass",
        },
        options: {
          style: "expanded",
          livereload: false
        }
      }
    }
  })

  // Default task
  grunt.registerTask("default", ["connect","watch"])

  // Load up tasks
  grunt.loadNpmTasks("grunt-contrib-sass")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks('grunt-contrib-connect')
}
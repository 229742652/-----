module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {//压缩
        fangchan: {
            files: {
                "zepto-touch.min.js": ["zepto-touch.js"]
            }
        }
    },
   cssmin: {
      combine: {
          files: {
            'lt-animate-moblie.min.css': ['lt-animate-moblie.css'],
            'lt-animate-pc.min.css': ['lt-animate-pc.css']
           }
     }
   }
   
  });
    //加载插件
 
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    //调用插件
  grunt.registerTask('default', ["uglify"]);
  
};
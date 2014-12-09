module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {//ѹ��
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
    //���ز��
 
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    //���ò��
  grunt.registerTask('default', ["uglify"]);
  
};
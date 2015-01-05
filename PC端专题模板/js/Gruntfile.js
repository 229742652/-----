module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //concat:{
    //    xuexi: { //�ϲ�
    //        files: {
    //            'main.js':["linten-zepto.touch.js","index.js"]
    //        }
    //    }
    //},
    uglify: {//ѹ��
        xuexi: {
            files: {
                "index.min.js":["index.js"]
            }
        }
    },
    watch: {
        xuexi: {
            files: ['Gruntfile.js', '**/*.js'],
            dateFormat: function (time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
            }
            

        }
    }
  });
    //���ز��
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    //���ò��
  grunt.registerTask('default', ["uglify", "watch"]);
  
};
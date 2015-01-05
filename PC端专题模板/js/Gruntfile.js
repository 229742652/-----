module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //concat:{
    //    xuexi: { //合并
    //        files: {
    //            'main.js':["linten-zepto.touch.js","index.js"]
    //        }
    //    }
    //},
    uglify: {//压缩
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
    //加载插件
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    //调用插件
  grunt.registerTask('default', ["uglify", "watch"]);
  
};
module.exports = function(grunt) {

    // Project configuration.
   // var mozjpeg = require('imagemin-mozjpeg');
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
    cssmin: {
        combine: {
            files: {
                '../css/index.min.css': ['../css/index.css'],
                '../css/animation.min.css': ['../css/animation.css']
            }
        }
    },
    less: {
        combine: {
            files: {
                '../css/index.min.css': '../css/index.less',
            }
        }
    }
  });
    //加载插件
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  //  grunt.loadNpmTasks('grunt-contrib-watch');
 //   grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
   //grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Default task(s).
    //调用插件
    grunt.registerTask('default', ["uglify","less"]);
   /// watch 插件和cssmin插件不能同时使用，会有问题。二选一
};
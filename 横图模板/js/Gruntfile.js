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
    watch: {
        xuexi: {
            files: ['Gruntfile.js', '**/*.js'],
            dateFormat: function (time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
            } 
        }
    },
    cssmin: {
        combine: {
            files: {
                '../css/index.min.css': ['../css/index.css']
            }
        }
    },
    concat_css: {//合并css插件。
        options: {
           // assetBaseUrl: 'static/assets',
            //baseDir: 'src/(styles|assets)'
        },
        files: {
            //'static/styles.css': ['src/styles/**/*.css', 'src/assets/**/*.css']
        }
    },
    imagemin: {
        /* 压缩图片大小 */
        dist: {
            files: {                         // Dictionary of files
                //'../images/1.jpg': '../images/1.jpg', // 'destination': 'source'
                //'../images/1.png': '../images/1.png',
                //'../images/2.jpg': '../images/2.jpg'
                //'dist/img3.png': '../images/3.png'
            }
        }
    }
  });
    //加载插件
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  //  grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Default task(s).
    //调用插件
   grunt.registerTask('default', ["uglify", "cssmin", "imagemin"]);
   /// watch 插件和cssmin插件不能同时使用，会有问题。二选一
};
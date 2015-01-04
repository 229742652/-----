module.exports = function(grunt) {

    // Project configuration.
   // var mozjpeg = require('imagemin-mozjpeg');
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
    //���ز��
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  //  grunt.loadNpmTasks('grunt-contrib-watch');
 //   grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
   //grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Default task(s).
    //���ò��
    grunt.registerTask('default', ["uglify","less"]);
   /// watch �����cssmin�������ͬʱʹ�ã��������⡣��ѡһ
};
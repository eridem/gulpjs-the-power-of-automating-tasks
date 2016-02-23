'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var notify = require('gulp-notify');

// #-- TUTORIAL: http://doc/05.png --#

gulp.task('op:cleanup', function () {
  //#region Non interested for the example
  del(['./dest', './dest2']);
  //#endregion
});

gulp.task('op:dummy', function () {
  gutil.log(gutil.colors.red('Task:'), gutil.colors.yellow('Dummy'));
});

gulp.task('op:copyFiles', function () {
 var replacement = require('./replacement.js');
 
   gutil.log(gutil.colors.red('Task:'), gutil.colors.yellow('Copying files'));
   
   gulp.src(['./src/**/*.txt', '!./src/**/*.dev'])
          .pipe(replacement('DUCK', 'GULP'))
 
          // #-- TUTORIAL: What will happen if we call replacement again?
          //.pipe(replacement('Let', 'It'))
              
          .pipe(gulp.dest('./dest'))
          .pipe(notify('Task: copyFiles')); 
 
});

gulp.task('build', ['op:cleanup', 'op:copyFiles', 'op:dummy'], function () {
  gutil.log(gutil.colors.red('Task:'), gutil.colors.yellow('Build success'));
});
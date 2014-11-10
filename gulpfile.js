/*jslint node: true */
'use strict';

var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass  = require('gulp-sass');

var paths = {
    sass: '_sass/*.scss'
}

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('jekyll', function() {
    var spawn = require('child_process').spawn,
        j     = spawn('bundle', ['exec', 'jekyll', 'serve']);
    gutil.log('Server started at', 'http://localhost:4000');
});

gulp.task('default', ['sass', 'watch', 'jekyll']);
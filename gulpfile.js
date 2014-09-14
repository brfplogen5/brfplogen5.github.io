/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

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

gulp.task('default', ['sass', 'watch']);
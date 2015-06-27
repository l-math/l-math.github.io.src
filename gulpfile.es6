'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('default', () => {
    gulp.src('./src/*')
        .pipe(gulp.dest('./build/'));
});

gulp.task('clean', (cb) => {
    del(['build/**/*'], cb);
});


const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })).pipe(gulp.dest('./dist/css'));
}


function images() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function () {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles))
}


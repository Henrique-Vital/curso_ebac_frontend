const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function comprimeJavascript() {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./dist/js'))
}

function compilaSass() {
    return gulp.src('./src/scss/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./dist/css'));
}

exports.default = function() {
    gulp.watch('./src/scss/main.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./src/js/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}
const {src, dest} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function styles() {
  return src('scss/*.scss')
    .pipe(autoprefixer({overrideBrowserslist: ['last 10 version']}))
    .pipe(concat('style.min.css'))
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(dest('css'))
    .pipe(browserSync.stream())
}

exports.styles = styles;
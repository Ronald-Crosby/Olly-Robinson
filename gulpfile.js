'use strict'

const { src, dest, watch, parallel, series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass');
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const terser = require('gulp-terser')
const browserSync = require('browser-sync').create()

function css() {
    return gulp.src('./source/css/input.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.init())
            .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename('output.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
}

function js() {
    return src('./source/js/main.js')
        .pipe(terser())
        .pipe(dest('./dist/js'))
        .pipe(browserSync.stream())
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch(['./source/css/*.scss'], css)
    // watch('./**/*.html').on('change', browserSync.reload)
    // watch('./source/js/*.js').on('change', js, browserSync.reload)
}

exports.css = css
exports.js = js
exports.watchFiles = watchFiles
exports.default = series(parallel(css, js), watchFiles)

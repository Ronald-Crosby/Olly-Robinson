'use strict'

const { src, dest, watch, series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass');
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const terser = require('gulp-terser')
const tailwind = require('tailwindcss')
const browserSync = require('browser-sync').create()

function css() {
    return gulp.src('./source/css/input.scss')
        .pipe(sass())
        .pipe(tailwind())
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

function img() {
    return src('./source/img/*')
        .pipe(dest('./dist/img'))
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch(['./source/css/*.scss'], css)
    watch('*.html').on('change', browserSync.reload)
    watch('./source/js/*.js').on('change', js, browserSync.reload)
    watch('./source/img/*').on('change', img)
}

exports.css = css
exports.js = js
exports.img = img
exports.watchFiles = watchFiles
exports.default = series(css, img, watchFiles)

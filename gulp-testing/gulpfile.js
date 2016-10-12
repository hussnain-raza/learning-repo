var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
//    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    //concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');


// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

// Clean
gulp.task('clean', function(cb) {
    del(['assets/css/*.css'], cb)
});

// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('assets/scss/*.scss', ['styles']);
    gulp.watch('assets/scss/components/*.scss', ['styles']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['assets/scss/']).on('change', livereload.changed);

});

// Styles
gulp.task('styles', function() {
    return sass('assets/scss/styles.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('assets/styles/css'))

        .pipe(gulp.dest('assets/styles/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});















//var gulp = require('gulp');
//var browserSync = require('browser-sync').create();
//var reload = browserSync.reload;
//var plumber = require('gulp-plumber');
//var rename = require('gulp-rename');
//var sass = require('gulp-sass');
//var csslint = require('gulp-csslint');
//var cssComb = require('gulp-csscomb');
//var cleanCss = require('gulp-clean-css');
//var coffee = require('gulp-coffee');
//var notify = require('gulp-notify');
//gulp.task('sass',function(){
//    gulp.src(['assets/scss/*.scss'])
//        .pipe(plumber({
//            handleError: function (err) {
//                console.log(err);
//                this.emit('end');
//            }
//        }))
//        .pipe(sass())
//        .pipe(cssComb())
//        .pipe(csslint())
//        .pipe(csslint.reporter())
//        .pipe(gulp.dest('assets/styles'))
//        .pipe(rename({
//            suffix: '.min'
//        }))
//        .pipe(cleanCss())
//        .pipe(gulp.dest('assets/styles'))
//        .pipe(reload())
//        .pipe(notify('css task finished'))
//});
//gulp.task('coffee',function(){
//    gulp.src(['js/src/**/*.coffee'])
//        .pipe(plumber({
//            handleError: function (err) {
//                console.log(err);
//                this.emit('end');
//            }
//        }))
//        .pipe(coffee())
//        .pipe(gulp.dest('js/dist'))
//        .pipe(reload())
//          .pipe(notify('js task finished'))
//});
//gulp.task('html',function(){
//    gulp.src(['{htmlSrc}/**/*.html'])
//        .pipe(plumber({
//            handleError: function (err) {
//                console.log(err);
//                this.emit('end');
//            }
//        }))
//        .pipe(gulp.dest('{htmlDest}'))
//        .pipe(reload())
//        .pipe(notify('html task finished'))
//});
//gulp.task('default',function(){
//    browserSync.init({
//        proxy: "./"
//    });
//    gulp.watch('js/src/**/*.coffee',['coffee']);
//    gulp.watch('assets/scss/*.scss',['sass']);
//    gulp.watch('{htmlSrc}/**/*.html',['html']);
//    gulp.watch('images/src/**/*',['image']);
//});

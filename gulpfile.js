var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
    gulp.watch('*.html', browserSync.reload);
});

module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp
            .src(['src/js/**/*.js', 'src/components/**/*.js'])
            .pipe($.gulp.dest('dist/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts:build', function () {
        return $.gulp
            .src(['src/js/**/*.js', 'src/components/**/*.js'])
            .pipe($.gp.uglify())
            .pipe($.gulp.dest('dist/js'));
    });
}
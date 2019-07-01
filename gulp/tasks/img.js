module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src('src/images/**/*.{png,jpeg,jpg,gif,svg}')
            .pipe($.gulp.dest('dist/images'))
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/images/**/*.{png,jpeg,jpg,gif,svg}')
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest('dist/images'))
    });
}
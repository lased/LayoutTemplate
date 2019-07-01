module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch(['src/styles/**/*.scss', 'src/components/**/*.scss'], $.gulp.series('sass'));
        $.gulp.watch(['src/js/**/*.js', 'src/components/**/*.js'], $.gulp.series('scripts'));
        $.gulp.watch('src/images/**/*.{png,jpg,gif,svg}', $.gulp.series('img'));
        $.gulp.watch('src/fonts/**/*.*', $.gulp.series('fonts'));
    })
}
module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp
            .src(['src/pug/pages/*.pug', 'src/pug/index.pug'])
            .pipe(
                $.gp.pug({
                    pretty: true
                })
                .on("error", $.gp.notify.onError("Error: <%= error.message %>"))
            )
            .pipe($.gulp.dest('dist/'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('pug:build', function () {
        return $.gulp
            .src(['src/pug/pages/*.pug', 'src/pug/index.pug'])
            .pipe(
                $.gp.pug()
                .on("error", $.gp.notify.onError("Error: <%= error.message %>"))
            )
            .pipe($.gulp.dest('dist/'));
    });
}
global.$ = {
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(function (pluginPath) {
    require(pluginPath)();
});

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.series('pug:build', 'scripts:build', 'sass:build', 'fonts', 'img:build')
));

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.series('pug', 'sass', 'scripts', 'fonts', 'img'),
    $.gulp.parallel('watch', 'serve')
));
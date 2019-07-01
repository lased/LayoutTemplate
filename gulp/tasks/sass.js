var postcss = require('gulp-postcss');
var uncss = require('uncss').postcssPlugin;

module.exports = function () {
    var plugins = [
        uncss({
            html: ['dist/*.html']
        }),
    ];

    $.gulp.task('sass', function () {
        return $.gulp
            .src(['src/styles/main.{sass,scss}', 'src/styles/**/main.{sass,scss}', 'src/components/**/*.{sass,scss}'])
            .pipe($.gp.sourcemaps.init())
            .pipe(
                $.gp.sass()
                .on("error", $.gp.notify.onError("Error: <%= error.message %>"))
            )
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('dist/css'))
            .pipe($.browserSync.reload({
                stream: true
            }))
    });

    $.gulp.task('sass:build', function () {
        return $.gulp
            .src(['src/styles/main.{sass,scss}', 'src/styles/**/main.{sass,scss}', 'src/components/**/*.{sass,scss}'])
            .pipe(
                $.gp.sass()
                .on("error", $.gp.notify.onError("Error: <%= error.message %>"))
            )
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(postcss(plugins))
            .pipe($.gp.csso())
            .pipe($.gulp.dest('dist/css'))
    });
}
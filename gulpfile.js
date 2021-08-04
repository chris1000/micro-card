var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
const htmlmin = require('gulp-htmlmin');

gulp.task('build', done => {
    gulp.src('*.html')
    .pipe(minifyInline())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'))
    done();
});

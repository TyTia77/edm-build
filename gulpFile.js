const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const watch = require('gulp-watch');
const inlineCss = require('gulp-inline-css');

gulp.task('inliner', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss({
            	applyStyleTags: true,
            	applyLinkTags: true,
            	removeStyleTags: true,
            	removeLinkTags: true,
                removeHtmlSelectors: true,
                applyTableAttributes: true
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('buildcss', () => {
    return gulp
        .src(['style/main.scss'])
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch(
        ['style/**/*.scss', 'index.html'],
        ['buildcss', 'inliner']
    );
});

gulp.task('default', ['watch']);

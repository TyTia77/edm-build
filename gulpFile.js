const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
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
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch(
        ['style/**/*.scss', 'index.html'],
        ['buildcss', 'inliner']
    );
});

gulp.task('default', ['watch']);

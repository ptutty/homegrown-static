

const gulp = require('gulp');
const livereload = require('gulp-livereload');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');

livereload({ start: true });

// SASS compile
gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({indentedSyntax : false, includePaths: ['sass']})
        .on('error', sass.logError))
        .pipe(gulp.dest('static/css/'))
        .pipe(livereload());
});


gulp.task('watch', () => {
    gulp.watch('views/**/*.html').on('change', (file) => {
        livereload.changed(file.path);
    });
    gulp.watch('views/**/*.njk').on('change', (file) => {
        livereload.changed(file.path);
    });
    gulp.watch('sass/**/*.scss', ['sass']);

    gulp.watch('static/css/*.css');

    livereload.listen();
});

gulp.task('server', () => {
  nodemon({
      script: 'app.js',
      ext: '.js'
    })
});

gulp.task('default', ['server', 'watch' ,'sass']);

const gulp = require('gulp');
const njkRender = require('gulp-nunjucks-render');
const livereload = require('gulp-livereload');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const config = require('./config/config');

// renders njk in to flat html files
gulp.task('njk', function() {
  return gulp
    .src(config.paths.views_dir + '/*.@(html|njk)')
    .pipe(
      njkRender({
        path: [config.paths.views_dir],
        data: config.njk.templateVars,
      })
    )
    .pipe(gulp.dest(config.paths.public_dir));
});


// use livereload to send refresh message to livereloaded chrome plugin
livereload({ start: true });

// SASS compiling
gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(sass({indentedSyntax : false, includePaths: ['sass']})
        .on('error', sass.logError))
        .pipe(gulp.dest('static/css/'))
        .pipe(livereload());
});

// SASS compiling into dist directory
gulp.task('sass-dist', function() {
    gulp.src('sass/*.scss')
        .pipe(sass({indentedSyntax : false, includePaths: ['sass']})
        .on('error', sass.logError))
        .pipe(gulp.dest('dist/static-files/css/'))
});


// watch for changes on njk file and sass files
gulp.task('watch', () => {
    gulp.watch('views/**/*.html').on('change', (file) => {
        livereload.changed(file.path);
    });
    gulp.watch('views/**/*.njk').on('change', (file) => {
        livereload.changed(file.path);
    });
    gulp.watch('sass/*.scss', ['sass']);

    livereload.listen();
});

// start nodemon server - watch js file and restart server if changed
gulp.task('server', () => {
  nodemon({
      script: 'app.js',
      ext: '.js'
    })
});

gulp.task('default', ['server', 'watch' ,'sass']);
gulp.task('build', ['sass-dist', 'njk']);

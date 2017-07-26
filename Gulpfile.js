// Gulpfile

const gulp = require('gulp'); 
const less    = require('gulp-less');
const uglify  = require('gulp-uglify');
const rename  = require('gulp-rename');
const cssmin  = require('gulp-cssmin');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('styles', () => {
    return gulp.src('src/less/styles.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('assets/css'))
});

gulp.task('scripts', () => {

	var bundler = browserify({
			entries: ['./src/js/scripts.js']
		}).transform(babelify.configure({
			presets : ["es2015"]
		}))

	var bundle = () => {

		return bundler.bundle()
            .pipe(source('scripts.js'))
            .pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest('./assets/js'))

	}

	return bundle()

});

gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/less/*.less', ['styles']);
});


gulp.task('default', ['styles', 'scripts', 'watch']);

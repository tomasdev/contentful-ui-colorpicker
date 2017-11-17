'strict mode';

const browserify = require('browserify');
const fs = require('fs');
const gulp = require('gulp');
const inlinesource = require('gulp-inline-source');
const minifyInline = require('gulp-minify-inline');

if (!fs.existsSync('./build')) {
  fs.mkdirSync('./build');
}

gulp.task('js', () =>
  browserify('./src/extension.js')
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .on('error', function (err) {
      console.error(err.message);
      console.log(err.codeFrame);
      this.emit('end');
    })
    .pipe(fs.createWriteStream('./build/extension.min.js'))
);

gulp.task('build', ['js'], () =>
  gulp.src('./src/index.html')
    .pipe(inlinesource({
      compress: true,
      handlers: [function js(source, context, next) {
        source.content = fs.readFileSync(source.filepath.replace('extension.js', '../build/extension.min.js'));
        next();
      }]
    }))
    .pipe(minifyInline())
    .pipe(gulp.dest('./build'))
);